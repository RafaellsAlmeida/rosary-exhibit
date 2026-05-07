(function initImmersiveRosary() {
  const map = document.getElementById("immersive-map");
  const stopsRoot = document.getElementById("immersive-stops");

  if (!map || !stopsRoot || typeof rosarySteps !== "function") return;

  const steps = rosarySteps();

  function immersivePosition(stepIndex) {
    if (stepIndex < openingBeads.length) {
      const openingPath = [
        { x: 50, y: 5 },
        { x: 50, y: 12 },
        { x: 50, y: 18 },
        { x: 50, y: 24 },
        { x: 50, y: 30 },
        { x: 50, y: 36 },
      ];
      return openingPath[stepIndex] || openingPath[openingPath.length - 1];
    }

    const beadIndex = stepIndex - openingBeads.length;
    if (beadIndex >= rosaryBeads.length) return { x: 50, y: 40.5 };

    const progress = (beadIndex + 1) / (rosaryBeads.length + 1);
    const angle = -Math.PI / 2 - progress * Math.PI * 2;

    return {
      x: 50 + Math.cos(angle) * 25,
      y: 70 + Math.sin(angle) * 33,
    };
  }

  function accentFor(item) {
    return {
      opening: "#d9a257",
      closing: "#f1d99c",
      joyful: "#d99545",
      luminous: "#7ac7d8",
      sorrowful: "#bd5f5e",
      glorious: "#e8c862",
      witness: "#80ad8b",
    }[item.decade || item.type || "opening"];
  }

  function stepLabel(item) {
    if (item.stepType === "bead") {
      return `Bead ${String(item.beadNumber).padStart(2, "0")} / ${titleCase(item.decade)}`;
    }
    return item.marker;
  }

  function stopSide(index) {
    return index % 2 === 0 ? "left" : "right";
  }

  map.innerHTML = `
    <div class="immersive-cord"></div>
    ${steps
      .map((item, index) => {
        const position = immersivePosition(index);
        return `
          <button
            class="immersive-map-bead ${item.stepType} ${item.decade || item.type || ""}"
            type="button"
            data-step="${index}"
            aria-label="${item.title}"
            style="--x: ${position.x}%; --y: ${position.y}%; --accent: ${accentFor(item)}"
          >
            <span>${stepLabel(item)}</span>
          </button>
        `;
      })
      .join("")}
  `;

  stopsRoot.innerHTML = steps
    .map((item, index) => {
      const formation = formationForRosaryItem(item);
      const side = stopSide(index);
      return `
        <article
          class="immersive-stop ${item.stepType} ${item.decade || item.type || ""}"
          data-step="${index}"
          data-side="${side}"
          style="--accent: ${accentFor(item)}"
        >
          <img class="immersive-stop-image" src="${item.image}" alt="${item.alt || item.title}" loading="${index < 2 ? "eager" : "lazy"}" />
          <div class="immersive-stop-shade" aria-hidden="true"></div>
          <div class="immersive-stop-copy">
            <span>${stepLabel(item)}</span>
            <h2>${item.title}</h2>
            <p class="immersive-scripture">${item.scripture}</p>
            <p>${item.body}</p>
            <div class="immersive-formation">
              ${formation.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  function setActive(index) {
    document.querySelectorAll(".immersive-map-bead").forEach((bead) => {
      const step = Number(bead.dataset.step);
      bead.classList.toggle("is-active", step === index);
      bead.classList.toggle("is-past", step < index);
    });

    document.querySelectorAll(".immersive-stop").forEach((stop) => {
      stop.classList.toggle("is-active", Number(stop.dataset.step) === index);
    });
  }

  map.addEventListener("click", (event) => {
    const bead = event.target.closest(".immersive-map-bead");
    if (!bead) return;

    stopsRoot
      .querySelector(`.immersive-stop[data-step="${bead.dataset.step}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeEntry) setActive(Number(activeEntry.target.dataset.step));
    },
    { threshold: [0.2, 0.42, 0.65], rootMargin: "-28% 0px -38% 0px" }
  );

  stopsRoot.querySelectorAll(".immersive-stop").forEach((stop) => observer.observe(stop));
  setActive(0);
})();
