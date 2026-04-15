(() => {
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (reducedMotion) return;

  const revealNodes = Array.from(document.querySelectorAll("[data-reveal]"));
  if (revealNodes.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { root: null, threshold: 0.15 }
  );

  revealNodes.forEach((n) => observer.observe(n));
})();

