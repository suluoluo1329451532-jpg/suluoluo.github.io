/* ============================================================
 * YHN® Digital Art Archive — Shared Scripts
 * Loaded on every page. Handles nav, scroll progress, reveals.
 * ============================================================ */

/* Mobile navigation toggle */
(function() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("topNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function() {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "关闭菜单" : "打开菜单");
  });

  nav.addEventListener("click", function(e) {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

/* Scroll progress bar */
(function() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  window.addEventListener("scroll", function() {
    const scrolled = document.documentElement.scrollTop;
    const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (total > 0) bar.style.width = (scrolled / total * 100) + "%";
  }, { passive: true });
})();

/* IntersectionObserver reveal animations */
(function() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function(el) { observer.observe(el); });
  } else {
    els.forEach(function(el) { el.classList.add("is-visible"); });
  }
})();