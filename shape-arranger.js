(function () {
  const STORAGE_KEY = "hdc-shape-arranger-v1";
  const SHAPES = {
    sphere: { label: "Sphere", symbol: "shape-sphere", size: 84 },
    magnet1: { label: "Magnet1", symbol: "shape-magnet1", size: 154 },
    wave: { label: "Wave", symbol: "shape-wave", size: 184 },
    magnet2: { label: "Magnet2", symbol: "shape-magnet2", size: 154 },
    openloop: { label: "OpenLoop", symbol: "shape-openloop", size: 184 },
  };

  const stage = document.getElementById("stage");
  const layer = document.getElementById("shape-layer");
  const homeCopy = document.getElementById("home-copy");
  const currentLayoutName = document.getElementById("current-layout-name");
  const saveStatus = document.getElementById("save-status");
  const emptyState = document.getElementById("empty-state");
  const controls = document.getElementById("controls");
  const selectedName = document.getElementById("selected-name");
  const selectedId = document.getElementById("selected-id");
  const controlX = document.getElementById("control-x");
  const controlY = document.getElementById("control-y");
  const controlScale = document.getElementById("control-scale");
  const controlRotation = document.getElementById("control-rotation");
  const scaleOutput = document.getElementById("scale-output");
  const rotationOutput = document.getElementById("rotation-output");
  const exportOutput = document.getElementById("export-output");

  let activeLayout = "hd";
  let selected = null;
  let drag = null;
  let zCounter = 10;
  let data = loadData();

  function loadData() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.layouts) {
        zCounter = saved.zCounter || 10;
        return saved;
      }
    } catch (error) {
      console.warn(error);
    }
    return {
      zCounter: 10,
      layouts: {
        hd: [],
        dc: [],
      },
    };
  }

  function saveData() {
    data.zCounter = zCounter;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    saveStatus.textContent = "已保存";
  }

  function currentItems() {
    return data.layouts[activeLayout];
  }

  function getItem(id) {
    return currentItems().find((item) => item.id === id);
  }

  function createId(type) {
    return `${type}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  }

  function addShape(type) {
    const rect = stage.getBoundingClientRect();
    const offset = currentItems().length * 14;
    const item = {
      id: createId(type),
      type,
      x: Math.round(rect.width / 2 + offset - 42),
      y: Math.round(rect.height / 2 + offset - 42),
      scale: 1,
      rotation: 0,
      z: ++zCounter,
    };
    currentItems().push(item);
    selected = item.id;
    saveData();
    render();
  }

  function makeShapeElement(item) {
    const spec = SHAPES[item.type];
    const el = document.createElement("button");
    el.type = "button";
    el.className = "shape-instance";
    el.dataset.id = item.id;
    el.style.width = `${spec.size}px`;
    el.style.height = `${spec.size}px`;
    el.style.zIndex = item.z;
    el.style.transform = `translate(-50%, -50%) translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg) scale(${item.scale})`;
    el.setAttribute("aria-label", `${spec.label} instance`);
    if (item.id === selected) {
      el.classList.add("is-selected");
    }
    el.innerHTML = `<svg viewBox="0 0 72 72" aria-hidden="true"><use href="#${spec.symbol}"></use></svg>`;
    return el;
  }

  function applyTransform(el, item) {
    const spec = SHAPES[item.type];
    el.style.width = `${spec.size}px`;
    el.style.height = `${spec.size}px`;
    el.style.zIndex = item.z;
    el.style.transform = `translate(-50%, -50%) translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg) scale(${item.scale})`;
  }

  function render() {
    layer.replaceChildren();
    currentItems()
      .slice()
      .sort((a, b) => a.z - b.z)
      .forEach((item) => layer.appendChild(makeShapeElement(item)));
    updateTabs();
    updateInspector();
    refreshExport();
  }

  function updateTabs() {
    document.querySelectorAll("[data-layout]").forEach((button) => {
      const isActive = button.dataset.layout === activeLayout;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    currentLayoutName.textContent = activeLayout.toUpperCase();
  }

  function updateInspector() {
    const item = selected ? getItem(selected) : null;
    controls.hidden = !item;
    emptyState.hidden = !!item;
    if (!item) {
      return;
    }
    const spec = SHAPES[item.type];
    selectedName.textContent = spec.label;
    selectedId.textContent = item.id;
    controlX.value = Math.round(item.x);
    controlY.value = Math.round(item.y);
    controlScale.value = item.scale;
    controlRotation.value = item.rotation;
    scaleOutput.value = item.scale.toFixed(2);
    rotationOutput.value = `${Math.round(item.rotation)}deg`;
  }

  function updateSelected(patch) {
    const item = selected ? getItem(selected) : null;
    if (!item) {
      return;
    }
    Object.assign(item, patch);
    saveStatus.textContent = "编辑中";
    saveData();
    render();
  }

  function duplicateSelected() {
    const item = selected ? getItem(selected) : null;
    if (!item) {
      return;
    }
    const copy = {
      ...item,
      id: createId(item.type),
      x: item.x + 28,
      y: item.y + 28,
      z: ++zCounter,
    };
    currentItems().push(copy);
    selected = copy.id;
    saveData();
    render();
  }

  function deleteSelected() {
    if (!selected) {
      return;
    }
    data.layouts[activeLayout] = currentItems().filter((item) => item.id !== selected);
    selected = null;
    saveData();
    render();
  }

  function nudgeSelected(dx, dy) {
    const item = selected ? getItem(selected) : null;
    if (!item) {
      return;
    }
    item.x += dx;
    item.y += dy;
    saveData();
    render();
  }

  function refreshExport() {
    const rect = stage.getBoundingClientRect();
    const exported = {
      layout: activeLayout,
      stage: {
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      },
      items: currentItems().map((item) => ({
        id: item.id,
        type: item.type,
        x: Math.round(item.x),
        y: Math.round(item.y),
        normalizedX: Number(((item.x - rect.width / 2) / (rect.width / 2)).toFixed(4)),
        normalizedY: Number(((rect.height / 2 - item.y) / (rect.height / 2)).toFixed(4)),
        scale: Number(item.scale.toFixed(3)),
        rotation: Math.round(item.rotation),
        z: item.z,
      })),
    };
    exportOutput.value = JSON.stringify(exported, null, 2);
  }

  document.querySelectorAll("[data-add-shape]").forEach((button) => {
    button.addEventListener("click", () => addShape(button.dataset.addShape));
  });

  document.querySelectorAll("[data-layout]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLayout = button.dataset.layout;
      selected = null;
      render();
    });
  });

  document.getElementById("show-home-text").addEventListener("change", (event) => {
    homeCopy.classList.toggle("is-hidden", !event.target.checked);
  });

  layer.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(".shape-instance");
    if (!target) {
      return;
    }
    const item = getItem(target.dataset.id);
    if (!item) {
      return;
    }
    selected = item.id;
    target.setPointerCapture(event.pointerId);
    drag = {
      id: item.id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      itemX: item.x,
      itemY: item.y,
    };
    render();
  });

  layer.addEventListener("pointermove", (event) => {
    if (!drag) {
      return;
    }
    const item = getItem(drag.id);
    if (!item) {
      return;
    }
    item.x = Math.round(drag.itemX + event.clientX - drag.startX);
    item.y = Math.round(drag.itemY + event.clientY - drag.startY);
    saveStatus.textContent = "编辑中";
    saveData();
    const el = layer.querySelector(`[data-id="${drag.id}"]`);
    if (el) {
      applyTransform(el, item);
    }
    updateInspector();
    refreshExport();
  });

  layer.addEventListener("pointerup", () => {
    drag = null;
  });

  stage.addEventListener("pointerdown", (event) => {
    if (event.target === stage || event.target.classList.contains("stage-grid")) {
      selected = null;
      render();
    }
  });

  controlX.addEventListener("input", () => updateSelected({ x: Number(controlX.value) }));
  controlY.addEventListener("input", () => updateSelected({ y: Number(controlY.value) }));
  controlScale.addEventListener("input", () => updateSelected({ scale: Number(controlScale.value) }));
  controlRotation.addEventListener("input", () => updateSelected({ rotation: Number(controlRotation.value) }));

  document.getElementById("duplicate-shape").addEventListener("click", duplicateSelected);
  document.getElementById("delete-shape").addEventListener("click", deleteSelected);
  document.getElementById("bring-forward").addEventListener("click", () => updateSelected({ z: ++zCounter }));
  document.getElementById("send-backward").addEventListener("click", () => {
    const minZ = Math.min(0, ...currentItems().map((item) => item.z));
    updateSelected({ z: minZ - 1 });
  });
  document.getElementById("refresh-json").addEventListener("click", refreshExport);
  document.getElementById("copy-json").addEventListener("click", async () => {
    refreshExport();
    try {
      await navigator.clipboard.writeText(exportOutput.value);
      saveStatus.textContent = "已复制";
    } catch (error) {
      exportOutput.select();
      saveStatus.textContent = "请手动复制";
    }
  });
  document.getElementById("copy-all-json").addEventListener("click", async () => {
    const rect = stage.getBoundingClientRect();
    const all = {
      stage: {
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      },
      layouts: Object.fromEntries(
        Object.entries(data.layouts).map(([layout, items]) => [
          layout,
          items.map((item) => ({
            id: item.id,
            type: item.type,
            x: Math.round(item.x),
            y: Math.round(item.y),
            normalizedX: Number(((item.x - rect.width / 2) / (rect.width / 2)).toFixed(4)),
            normalizedY: Number(((rect.height / 2 - item.y) / (rect.height / 2)).toFixed(4)),
            scale: Number(item.scale.toFixed(3)),
            rotation: Math.round(item.rotation),
            z: item.z,
          })),
        ])
      ),
    };
    const text = JSON.stringify(all, null, 2);
    exportOutput.value = text;
    try {
      await navigator.clipboard.writeText(text);
      saveStatus.textContent = "全部已复制";
    } catch (error) {
      exportOutput.select();
      saveStatus.textContent = "请手动复制";
    }
  });
  document.getElementById("swap-layouts").addEventListener("click", () => {
    const hd = data.layouts.hd;
    data.layouts.hd = data.layouts.dc;
    data.layouts.dc = hd;
    selected = null;
    saveData();
    render();
    saveStatus.textContent = "已交换";
  });
  document.getElementById("clear-layout").addEventListener("click", () => {
    if (!confirm(`清空 ${activeLayout.toUpperCase()} 画布？`)) {
      return;
    }
    data.layouts[activeLayout] = [];
    selected = null;
    saveData();
    render();
  });

  window.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea")) {
      return;
    }
    const step = event.shiftKey ? 10 : 1;
    if (event.key === "Delete" || event.key === "Backspace") {
      deleteSelected();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      nudgeSelected(-step, 0);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      nudgeSelected(step, 0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      nudgeSelected(0, -step);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      nudgeSelected(0, step);
    }
  });

  window.addEventListener("resize", refreshExport);
  render();
})();
