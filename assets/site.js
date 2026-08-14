(function () {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  if (!box || !img) return;

  document.querySelectorAll("figure.shot img, .reel img").forEach((el) => {
    el.addEventListener("click", () => {
      img.src = el.currentSrc || el.src;
      img.alt = el.alt || "";
      box.classList.add("open");
    });
  });

  function close() {
    box.classList.remove("open");
    img.removeAttribute("src");
  }

  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest("button")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  const video = document.getElementById("walkthrough");
  const wrap = video?.closest(".video-wrap");
  if (video && wrap) {
    const source = video.querySelector("source");
    const src = source?.getAttribute("src");
    if (src) {
      fetch(src, { method: "HEAD" })
        .then((r) => {
          if (r.ok) wrap.classList.remove("is-empty");
        })
        .catch(() => {});
    }
  }
})();
