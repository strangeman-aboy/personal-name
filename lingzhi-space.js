(function () {
  const shell = document.querySelector(".space-shell");
  const heixiuButton = document.querySelector(".heixiu-button");
  const sprite = document.querySelector(".heixiu-sprite");
  const bubbles = Array.from(document.querySelectorAll(".space-bubble"));
  const prompt = document.querySelector(".prompt");
  const promptKicker = document.querySelector(".prompt-kicker");
  const promptTitle = document.querySelector(".prompt-title");
  const promptNote = document.querySelector(".prompt-note");
  const inside = document.querySelector(".inside-space");
  const insideTitle = inside.querySelector("h2");
  const backButton = document.querySelector(".back-button");

  const frames = [
    "./life-space-assets/heixiu/heixiu-idle.png",
    "./life-space-assets/heixiu/heixiu-curious.png",
    "./life-space-assets/heixiu/heixiu-nod.png",
    "./life-space-assets/heixiu/heixiu-spark.png",
    "./life-space-assets/heixiu/heixiu-cool.png"
  ];

  const reactionFrames = [
    "./life-space-assets/heixiu/heixiu-peek.png",
    "./life-space-assets/heixiu/heixiu-spin.png",
    "./life-space-assets/heixiu/heixiu-tumble.png",
    "./life-space-assets/heixiu/heixiu-shy.png"
  ];

  let frameIndex = 0;
  let selectedSpace = "";

  window.setInterval(() => {
    if (!sprite || shell.dataset.state === "inside") return;
    frameIndex = (frameIndex + 1) % frames.length;
    sprite.src = frames[frameIndex];
  }, 1600);

  function wakeHeixiu() {
    selectedSpace = "";
    shell.dataset.state = "awake";
    bubbles.forEach((bubble) => bubble.classList.remove("is-selected"));
    sprite.src = reactionFrames[Math.floor(Math.random() * reactionFrames.length)];
    window.setTimeout(() => {
      sprite.src = frames[0];
    }, 760);
  }

  function selectSpace(space, bubble) {
    if (selectedSpace === space && shell.dataset.state === "selected") {
      enterSpace(space);
      return;
    }

    selectedSpace = space;
    shell.dataset.state = "selected";
    bubbles.forEach((item) => item.classList.toggle("is-selected", item === bubble));
    promptKicker.textContent = space;
    promptTitle.textContent = "进入我的灵志空间";
    promptNote.textContent = "再点一次入口";
    sprite.src = reactionFrames[Math.floor(Math.random() * reactionFrames.length)];
  }

  function enterSpace(space) {
    shell.dataset.state = "inside";
    insideTitle.textContent = space;
    promptNote.textContent = "正在进入";
  }

  function backToMap() {
    selectedSpace = "";
    shell.dataset.state = "awake";
    bubbles.forEach((bubble) => bubble.classList.remove("is-selected"));
    prompt.setAttribute("aria-hidden", "true");
    window.setTimeout(() => prompt.removeAttribute("aria-hidden"), 260);
  }

  heixiuButton.addEventListener("click", wakeHeixiu);

  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", () => selectSpace(bubble.dataset.space, bubble));
  });

  backButton.addEventListener("click", backToMap);

  const demoState = new URLSearchParams(window.location.search).get("demo");
  if (demoState === "awake") {
    window.setTimeout(wakeHeixiu, 250);
  }
  if (demoState === "selected") {
    window.setTimeout(() => selectSpace("项目空间", bubbles[0]), 250);
  }
  if (demoState === "inside") {
    window.setTimeout(() => enterSpace("项目空间"), 250);
  }
})();
