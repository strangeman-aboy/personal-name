(function () {
  const rows = Array.from(document.querySelectorAll("[data-preview-row]"));
  const frame = document.querySelector("[data-preview-frame]");
  const captionTitle = document.querySelector("[data-preview-title]");
  const captionSource = document.querySelector("[data-preview-source]");

  if (!rows.length || !frame) return;

  function escapeText(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function setActive(row) {
    rows.forEach((item) => item.classList.toggle("is-active", item === row));

    const image = row.dataset.previewImage;
    const title = row.dataset.previewTitle || "";
    const category = row.dataset.previewCategory || "";
    const summary = row.dataset.previewSummary || "";
    const source = row.dataset.previewSource || "";

    if (image) {
      frame.innerHTML = `<img src="${escapeText(image)}" alt="${escapeText(title)} preview" />`;
    } else {
      frame.innerHTML = `
        <div class="preview-copy">
          <span>${escapeText(category)}</span>
          <strong>${escapeText(title)}</strong>
          <p>${escapeText(summary)}</p>
        </div>
      `;
    }

    if (captionTitle) captionTitle.textContent = title;
    if (captionSource) captionSource.textContent = source;
  }

  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => setActive(row));
    row.addEventListener("focus", () => setActive(row));
  });

  setActive(rows[0]);
})();
