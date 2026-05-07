(function initRosaryBeads3D() {
  const canvas = document.getElementById("rosary-3d");
  if (!canvas || !window.THREE) return;

  const THREE = window.THREE;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const buttons = Array.from(document.querySelectorAll("[data-step]")).sort(
    (a, b) => Number(a.dataset.step) - Number(b.dataset.step)
  );

  if (!buttons.length) return;

  document.body.classList.add("has-webgl-beads");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0, 15);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.55));

  const group = new THREE.Group();
  scene.add(group);

  scene.add(new THREE.AmbientLight(0xe8d7bc, 0.86));

  const keyLight = new THREE.DirectionalLight(0xffefc4, 1.75);
  keyLight.position.set(2.6, 4.8, 6);
  scene.add(keyLight);

  const blueFill = new THREE.PointLight(0x6fa9d4, 0.9, 18);
  blueFill.position.set(-3.8, -2.2, 5);
  scene.add(blueFill);

  const goldFill = new THREE.PointLight(0xe0ba67, 0.58, 14);
  goldFill.position.set(3.8, 1.4, 4);
  scene.add(goldFill);

  const palette = {
    opening: 0xd8c59b,
    joyful: 0xd6b15f,
    luminous: 0x74a8bf,
    sorrowful: 0x9e5260,
    glorious: 0xf0d989,
    witness: 0x789b83,
  };

  function percentForStep(stepIndex) {
    if (stepIndex < 4) {
      const offsets = [-9, 9, -9, 9];
      return {
        x: 50 + offsets[stepIndex],
        y: 7 + stepIndex * 4.9,
      };
    }

    const beadIndex = stepIndex - 4;
    const decadeIndex = Math.floor(beadIndex / 10);
    const beadInDecade = beadIndex % 10;
    const isReverse = decadeIndex % 2 === 1;
    const horizontalIndex = isReverse ? 9 - beadInDecade : beadInDecade;

    return {
      x: 15 + horizontalIndex * 7.75 + Math.sin((beadInDecade / 9) * Math.PI) * 4,
      y: 28 + decadeIndex * 13.2 + beadInDecade * 0.86,
    };
  }

  function pointForStep(stepIndex) {
    const percent = percentForStep(stepIndex);
    const beadIndex = Math.max(stepIndex - 4, 0);
    const beadInDecade = beadIndex % 10;
    const z = stepIndex < 4 ? 0.28 - stepIndex * 0.06 : Math.sin((beadInDecade / 9) * Math.PI) * 0.42;
    return new THREE.Vector3((percent.x - 50) * 0.062, 5.15 - percent.y * 0.105, z);
  }

  const points = buttons.map((button) => pointForStep(Number(button.dataset.step)));
  const curve = new THREE.CatmullRomCurve3(points);
  const cord = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 260, 0.026, 8, false),
    new THREE.MeshStandardMaterial({
      color: 0xa98747,
      roughness: 0.72,
      metalness: 0.16,
      transparent: true,
      opacity: 0.78,
    })
  );
  group.add(cord);

  const beadGeometry = new THREE.SphereGeometry(0.17, 28, 20);
  const openingGeometry = new THREE.SphereGeometry(0.2, 28, 20);
  const beadMeshes = [];

  buttons.forEach((button) => {
    const stepIndex = Number(button.dataset.step);
    const decade =
      Array.from(button.classList).find((className) =>
        ["joyful", "luminous", "sorrowful", "glorious", "witness"].includes(className)
      ) || "opening";
    const color = palette[decade] || palette.opening;
    const material = new THREE.MeshStandardMaterial({
      color,
      emissive: 0x000000,
      roughness: 0.32,
      metalness: 0.08,
    });
    const mesh = new THREE.Mesh(stepIndex < 4 ? openingGeometry : beadGeometry, material);
    mesh.position.copy(pointForStep(stepIndex));
    mesh.userData.stepIndex = stepIndex;
    mesh.userData.baseScale = stepIndex < 4 ? 1.08 : 1;
    mesh.userData.targetScale = mesh.userData.baseScale;
    beadMeshes.push(mesh);
    group.add(mesh);
  });

  const crossGroup = new THREE.Group();
  const crossMaterial = new THREE.MeshStandardMaterial({
    color: 0xc39a45,
    roughness: 0.42,
    metalness: 0.26,
  });
  const crossVertical = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.72, 0.08), crossMaterial);
  const crossHorizontal = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.08, 0.08), crossMaterial);
  crossHorizontal.position.y = 0.12;
  crossGroup.add(crossVertical, crossHorizontal);
  crossGroup.position.copy(pointForStep(0)).add(new THREE.Vector3(0, 0.62, 0.02));
  group.add(crossGroup);

  let activeIndex = 0;
  let pointerX = 0;
  let pointerY = 0;
  let visible = true;
  let frame = 0;

  function setActive(index) {
    activeIndex = Number(index) || 0;
    beadMeshes.forEach((mesh) => {
      const isActive = mesh.userData.stepIndex === activeIndex;
      mesh.userData.targetScale = isActive ? mesh.userData.baseScale * 1.74 : mesh.userData.baseScale;
      mesh.material.emissive.setHex(isActive ? 0x5c4218 : 0x000000);
    });

    if (reducedMotion) renderOnce();
  }

  function resize() {
    const width = Math.max(canvas.clientWidth, 1);
    const height = Math.max(canvas.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    renderOnce();
  }

  function renderOnce() {
    renderer.render(scene, camera);
  }

  function animate(time = 0) {
    if (!visible) return;

    const t = time * 0.001;
    group.rotation.y = pointerX * 0.18 + Math.sin(t * 0.38) * 0.06;
    group.rotation.x = pointerY * -0.08 + Math.sin(t * 0.24) * 0.025;

    beadMeshes.forEach((mesh, index) => {
      const target = mesh.userData.targetScale;
      const current = mesh.scale.x;
      const next = current + (target - current) * 0.12;
      mesh.scale.setScalar(next);
      mesh.position.z = pointForStep(mesh.userData.stepIndex).z + Math.sin(t * 1.1 + index * 0.27) * 0.025;
    });

    crossGroup.rotation.z = Math.sin(t * 0.55) * 0.025;
    renderer.render(scene, camera);
    frame = window.requestAnimationFrame(animate);
  }

  window.addEventListener("rosary:active-step", (event) => {
    setActive(event.detail.index);
  });

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
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
    { threshold: 0.05 }
  );
  visibilityObserver.observe(canvas);

  const activeButton = buttons.find((button) => button.classList.contains("is-active"));
  setActive(activeButton ? Number(activeButton.dataset.step) : 0);
  resize();

  if (!reducedMotion) {
    frame = window.requestAnimationFrame(animate);
  }
})();
