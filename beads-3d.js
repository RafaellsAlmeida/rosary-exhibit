(function loadPullableRosary3D() {
  // Self-hosted so Vercel serves it with immutable cache headers from its own CDN
  // edge — no third-party round-trip, no Lighthouse third-party-summary penalty.
  const threeModuleUrl = "./vendor/three.module.min.js";

  const dock = document.getElementById("pull-rosary");
  if (!dock) return;

  // Mark the dock as "loading" immediately so CSS can show a shimmer while
  // Three.js is fetched and parsed. The 2D #rosary-map strand is already
  // interactive at this point — it's the primary experience; the 3D dock is
  // progressive enhancement only.
  dock.classList.add("is-loading");

  function doLoad() {
    if (window.THREE) {
      initPullableRosary3D(window.THREE);
      return;
    }

    // Try self-hosted first (served from same domain, immutable cache).
    // If the file isn't deployed yet or fetch fails, fall back to unpkg so
    // the dock still works during the transition period.
    const cdnFallback = "https://unpkg.com/three@0.160.0/build/three.module.min.js";

    import(threeModuleUrl)
      .catch(() => import(cdnFallback))
      .then((module) => initPullableRosary3D(module))
      .catch(() => {
        // Both sources failed (offline, WebGL blocked, etc.).
        // Keep the dock visible with its text fallback — never a blank box.
        dock.classList.remove("is-loading");
        dock.classList.add("is-fallback");
      });
  }

  // Defer Three.js evaluation until the browser has spare capacity so it
  // never competes with LCP/TTI metrics. requestIdleCallback is supported in
  // all target browsers; the timeout forces it within 4 s on slow devices.
  if ("requestIdleCallback" in window) {
    requestIdleCallback(doLoad, { timeout: 4000 });
  } else {
    // Safari fallback — still async, just a fixed delay
    setTimeout(doLoad, 200);
  }
})();

function initPullableRosary3D(THREE) {
  const canvas = document.getElementById("rosary-3d");
  const dock = document.getElementById("pull-rosary");
  const title = document.getElementById("pull-rosary-title");
  const kicker = document.getElementById("pull-rosary-kicker");

  if (!canvas || !dock) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stepButtons = Array.from(document.querySelectorAll("#rosary-map button[data-step]")).sort(
    (a, b) => Number(a.dataset.step) - Number(b.dataset.step)
  );

  if (!stepButtons.length) {
    // 2D strand not rendered on this page — bail silently; dock stays loading
    dock.classList.remove("is-loading");
    dock.classList.add("is-fallback");
    return;
  }

  // Three.js is ready and the 2D strand buttons exist. Transition the dock
  // from loading shimmer to the live 3D canvas.
  document.body.classList.add("has-pull-rosary");
  dock.classList.remove("is-loading");

  const maxStep = stepButtons.length - 1;
  const pickables = [];
  const beadEntries = [];
  const segments = [];
  const clock = new THREE.Clock();
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const yAxis = new THREE.Vector3(0, 1, 0);

  const stepMeta = stepButtons.map((button, order) => {
    const step = Number(button.dataset.step);
    const label = button.dataset.label || button.textContent.trim();
    const classList = Array.from(button.classList);
    const type = classList.includes("closing-marker")
      ? "closing"
      : classList.includes("opening-marker")
        ? "opening"
        : "bead";
    const decade =
      classList.find((className) =>
        ["joyful", "luminous", "sorrowful", "glorious", "witness"].includes(className)
      ) || type;

    return {
      step,
      order,
      type,
      decade,
      label,
      title: window.rosaryI18n?.getOriginalAttribute?.(button, "aria-label") || button.getAttribute("aria-label") || label,
    };
  });

  const orderByStep = new Map(stepMeta.map((item) => [item.step, item.order]));
  const metaByStep = new Map(stepMeta.map((item) => [item.step, item]));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-8, 8, 2.4, -2.4, 0.1, 100);
  camera.position.set(0, 0, 10);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));

  const group = new THREE.Group();
  group.position.y = -0.14;
  scene.add(group);

  scene.add(new THREE.AmbientLight(0xe9dbc3, 0.82));

  const keyLight = new THREE.DirectionalLight(0xffefc6, 1.65);
  keyLight.position.set(-3.5, 5, 5.4);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x84b6d6, 0.72);
  rimLight.position.set(4, 2.2, 5);
  scene.add(rimLight);

  const lowGold = new THREE.PointLight(0xf0c46b, 1.1, 18);
  lowGold.position.set(0, -2.5, 3.2);
  scene.add(lowGold);

  const palette = {
    opening: 0xd99c45,
    closing: 0xf1d99c,
    joyful: 0xcd8141,
    luminous: 0x77adc0,
    sorrowful: 0xa95862,
    glorious: 0xe7c66c,
    witness: 0x789d81,
  };

  const beadGeometry = new THREE.SphereGeometry(0.18, 18, 14);
  const openingGeometry = new THREE.SphereGeometry(0.2, 18, 14);
  const medalGeometry = new THREE.SphereGeometry(0.3, 22, 16);
  const cordGeometry = new THREE.CylinderGeometry(0.026, 0.026, 1, 6);
  const cordMaterial = new THREE.MeshStandardMaterial({
    color: 0xb58a48,
    roughness: 0.68,
    metalness: 0.12,
    transparent: true,
    opacity: 0.82,
  });

  function materialFor(decade) {
    return new THREE.MeshStandardMaterial({
      color: palette[decade] || palette.opening,
      roughness: 0.3,
      metalness: 0.08,
      emissive: 0x000000,
    });
  }

  function addCross(meta) {
    const cross = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: 0xd3a44c,
      roughness: 0.38,
      metalness: 0.22,
    });
    const vertical = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.72, 0.1), material);
    const horizontal = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.1, 0.1), material);
    horizontal.position.y = 0.13;
    cross.add(vertical, horizontal);
    cross.rotation.z = -0.08;
    cross.userData.step = meta.step;
    cross.userData.baseScale = 1;
    cross.userData.targetScale = 1;
    vertical.userData.step = meta.step;
    horizontal.userData.step = meta.step;
    pickables.push(vertical, horizontal);
    group.add(cross);
    beadEntries.push({ meta, mesh: cross, material, baseScale: 1, isCross: true });
  }

  stepMeta.forEach((meta) => {
    if (meta.step === 0) {
      addCross(meta);
      return;
    }

    const geometry =
      meta.type === "closing" ? medalGeometry : meta.type === "opening" ? openingGeometry : beadGeometry;
    const material = materialFor(meta.decade);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData.step = meta.step;
    mesh.userData.baseScale = meta.type === "closing" ? 1.16 : meta.type === "opening" ? 1.03 : 1;
    mesh.userData.targetScale = mesh.userData.baseScale;

    if (meta.type === "closing") {
      mesh.scale.set(1.18, 0.78, 1.18);
      mesh.rotation.x = 0.5;
    }

    pickables.push(mesh);
    group.add(mesh);
    beadEntries.push({ meta, mesh, material, baseScale: mesh.userData.baseScale, isCross: false });
  });

  for (let index = 0; index < stepMeta.length - 1; index += 1) {
    const segment = new THREE.Mesh(cordGeometry, cordMaterial);
    segment.visible = false;
    group.add(segment);
    segments.push(segment);
  }

  let activeStep = 0;
  let targetOffset = 0;
  let displayOffset = 0;
  let viewWidth = 16;
  let viewHeight = 4.8;
  let isDragging = false;
  let dragMoved = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartOffset = 0;
  let liftTarget = 0;
  let lift = 0;
  let frame = 0;
  let lastFrameTime = 0;
  let visible = true;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function pointForOrder(order, offset, elapsed) {
    const spacing = 0.43;
    const x = (order - offset) * spacing;
    const wave = Math.sin(order * 0.52 + elapsed * 0.8) * 0.06;
    const centerPull = Math.max(0, 1 - Math.abs(order - offset) / 6);
    const y = -0.45 - Math.cos((order - offset) * 0.22) * 0.22 + centerPull * (0.42 + lift) + wave;
    const z = Math.sin(order * 0.38 + elapsed * 0.4) * 0.15 + centerPull * 0.18;
    return new THREE.Vector3(x, y, z);
  }

  function alignSegment(segment, start, end) {
    const direction = end.clone().sub(start);
    const length = direction.length();
    if (length <= 0.001) {
      segment.visible = false;
      return;
    }

    segment.visible = true;
    segment.position.copy(start).add(end).multiplyScalar(0.5);
    segment.scale.set(1, length, 1);
    segment.quaternion.setFromUnitVectors(yAxis, direction.normalize());
  }

  function stepLabel(meta) {
    if (meta.type === "closing") return "Closing prayer";
    if (meta.type === "opening") return meta.label || "Opening prayer";
    return `${meta.label || `Bead ${meta.order}`} / ${meta.decade}`;
  }

  function updateStatus(step) {
    const meta = metaByStep.get(step) || stepMeta[0];
    if (title) title.textContent = meta.title;
    if (kicker) kicker.textContent = stepLabel(meta);
  }

  function syncPath(step, shouldScroll) {
    activeStep = clamp(Number(step) || 0, 0, maxStep);
    updateStatus(activeStep);

    if (window.rosaryPath?.setActive) {
      window.rosaryPath.setActive(activeStep);
    }

    updateActiveMaterials();

    if (shouldScroll) {
      if (window.rosaryPath?.scrollTo) {
        window.rosaryPath.scrollTo(activeStep);
      } else {
        document
          .querySelector(`#rosary-steps [data-step="${activeStep}"]`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  function setActiveStep(step, options = {}) {
    const nextStep = clamp(Number(step) || 0, 0, maxStep);
    const nextOrder = orderByStep.get(nextStep) || 0;
    targetOffset = nextOrder;
    syncPath(nextStep, Boolean(options.scroll));
    if (reducedMotion) renderScene();
  }

  function setActiveFromOffset(offset) {
    const order = clamp(Math.round(offset), 0, maxStep);
    const next = stepMeta[order]?.step || 0;
    targetOffset = clamp(offset, 0, maxStep);
    if (next !== activeStep) syncPath(next, false);
    if (reducedMotion) renderScene();
  }

  function updateActiveMaterials() {
    beadEntries.forEach(({ meta, mesh, material, baseScale, isCross }) => {
      const isActive = meta.step === activeStep;
      const targetScale = isActive ? baseScale * 1.66 : baseScale;
      mesh.userData.targetScale = targetScale;
      if (material?.emissive) material.emissive.setHex(isActive ? 0x604516 : 0x000000);
      if (isCross) {
        mesh.children.forEach((child) => child.material.emissive?.setHex(isActive ? 0x604516 : 0x000000));
      }
    });
  }

  function resize() {
    const width = Math.max(canvas.clientWidth, 1);
    const height = Math.max(canvas.clientHeight, 1);
    const aspect = width / height;
    viewHeight = 4.8;
    viewWidth = viewHeight * aspect;
    camera.left = -viewWidth / 2;
    camera.right = viewWidth / 2;
    camera.top = viewHeight / 2;
    camera.bottom = -viewHeight / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function renderScene() {
    const elapsed = clock.getElapsedTime();
    displayOffset += (targetOffset - displayOffset) * (isDragging ? 0.34 : 0.13);
    lift += (liftTarget - lift) * 0.14;

    const points = stepMeta.map((meta) => pointForOrder(meta.order, displayOffset, elapsed));

    beadEntries.forEach(({ meta, mesh, isCross }) => {
      const point = points[meta.order];
      const centerPull = Math.max(0, 1 - Math.abs(meta.order - displayOffset) / 7);
      const targetScale = mesh.userData.targetScale || mesh.userData.baseScale || 1;
      const currentScale = mesh.scale.x || 1;
      const nextScale = currentScale + (targetScale - currentScale) * 0.18;

      mesh.position.copy(point);
      if (isCross) {
        mesh.position.y -= 0.14;
        mesh.scale.setScalar(nextScale);
        mesh.rotation.y = Math.sin(elapsed * 0.7 + meta.order) * 0.12 + centerPull * 0.18;
      } else if (meta.type === "closing") {
        mesh.scale.set(nextScale * 1.18, nextScale * 0.78, nextScale * 1.18);
        mesh.rotation.y = elapsed * 0.18 + centerPull * 0.6;
      } else {
        mesh.scale.setScalar(nextScale);
        mesh.rotation.y = elapsed * 0.22 + meta.order * 0.08;
      }
    });

    segments.forEach((segment, index) => {
      const start = points[index];
      const end = points[index + 1];
      const isVisible =
        Math.abs(start.x) < viewWidth * 0.6 ||
        Math.abs(end.x) < viewWidth * 0.6 ||
        (start.x < -viewWidth / 2 && end.x > viewWidth / 2);
      if (!isVisible) {
        segment.visible = false;
        return;
      }
      alignSegment(segment, start, end);
    });

    group.rotation.x = -0.08 + lift * 0.1;
    group.rotation.y = Math.sin(elapsed * 0.32) * 0.035;
    renderer.render(scene, camera);
  }

  function animate(time = 0) {
    if (!visible && !isDragging) return;
    const frameInterval = isDragging ? 16 : 50;
    if (time - lastFrameTime >= frameInterval) {
      renderScene();
      lastFrameTime = time;
    }
    frame = window.requestAnimationFrame(animate);
  }

  function pointerToCanvas(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function pickedStep(event) {
    pointerToCanvas(event);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(pickables, false);
    return hits[0]?.object?.userData?.step;
  }

  canvas.addEventListener("pointerdown", (event) => {
    isDragging = true;
    dragMoved = false;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragStartOffset = targetOffset;
    dock.classList.add("is-pulling");
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - dragStartX;
    const deltaY = event.clientY - dragStartY;
    const pixelsPerBead = Math.max(20, canvas.clientWidth / 32);
    dragMoved = dragMoved || Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4;
    liftTarget = clamp(-deltaY / 150, -0.28, 0.62);
    setActiveFromOffset(dragStartOffset - deltaX / pixelsPerBead);
  });

  function finishPointer(event) {
    if (!isDragging) return;

    isDragging = false;
    liftTarget = 0;
    dock.classList.remove("is-pulling");

    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }

    if (!dragMoved) {
      const step = pickedStep(event);
      if (Number.isFinite(step)) setActiveStep(step, { scroll: true });
      return;
    }

    setActiveStep(activeStep, { scroll: true });
  }

  canvas.addEventListener("pointerup", finishPointer);
  canvas.addEventListener("pointercancel", finishPointer);

  window.addEventListener("rosary:active-step", (event) => {
    const step = Number(event.detail.index);
    if (!Number.isFinite(step) || step === activeStep) return;
    activeStep = clamp(step, 0, maxStep);
    targetOffset = orderByStep.get(activeStep) || 0;
    updateStatus(activeStep);
    updateActiveMaterials();
  });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reducedMotion) {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(animate);
      }
    },
    { threshold: 0.01 }
  );
  visibilityObserver.observe(dock);

  resize();
  setActiveStep(0, { scroll: false });
  updateActiveMaterials();
  renderScene();

  if (!reducedMotion) {
    window.setTimeout(() => {
      frame = window.requestAnimationFrame(animate);
    }, 120);
  }
}
