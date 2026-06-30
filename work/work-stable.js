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

    const badges = (row.dataset.previewBadges || "").split("|").filter(Boolean).slice(0, 4);
    const points = (row.dataset.previewPoints || "").split("|").filter(Boolean).slice(0, 3);
    const title = row.dataset.previewTitle || "";
    const category = row.dataset.previewCategory || "";
    const summary = row.dataset.previewSummary || "";
    const source = row.dataset.previewSource || "";
    const index = String(rows.indexOf(row) + 1).padStart(2, "0");

    frame.innerHTML = `
      <div class="preview-brief">
        <div class="preview-brief-top">
          <span class="preview-brief-kicker">${escapeText(category)}</span>
          <span class="preview-brief-number">${index}</span>
        </div>
        <div class="preview-brief-body">
          <strong>${escapeText(title)}</strong>
          <p>${escapeText(summary)}</p>
        </div>
        <div class="preview-brief-bottom">
          <div class="preview-brief-tags">${badges.map((badge) => `<span>${escapeText(badge)}</span>`).join("")}</div>
          <ol class="preview-brief-points">
            ${points.map((point, pointIndex) => `<li><span>${String(pointIndex + 1).padStart(2, "0")}</span><p>${escapeText(point)}</p></li>`).join("")}
          </ol>
        </div>
      </div>
    `;

    if (captionTitle) captionTitle.textContent = title;
    if (captionSource) captionSource.textContent = source;
  }

  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => setActive(row));
    row.addEventListener("focus", () => setActive(row));
  });

  setActive(rows[0]);
})();
