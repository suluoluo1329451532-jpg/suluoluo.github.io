/* ============================================================
 * YHN® Digital Art Archive — Shared Scripts
 * Loaded on every page. Handles nav, breadcrumbs, back button,
 * scroll progress, reveals, and navigation history tracking.
 * ============================================================ */

/* ---- Navigation History (sessionStorage) ---- */
var NAV_KEY = "yhn_nav_history";
var NAV_MAX = 20;

function _getNavHistory() {
  try { return JSON.parse(sessionStorage.getItem(NAV_KEY)) || []; }
  catch (e) { return []; }
}

function _setNavHistory(arr) {
  try { sessionStorage.setItem(NAV_KEY, JSON.stringify(arr)); } catch (e) {}
}

function _isInternal(url) {
  try {
    var u = new URL(url, window.location.origin);
    return u.origin === window.location.origin;
  } catch (e) { return false; }
}

function pushNavPage() {
  var current = window.location.pathname + window.location.search;
  var history = _getNavHistory();
  if (history.length === 0 || history[history.length - 1] !== current) {
    history.push(current);
    if (history.length > NAV_MAX) history.shift();
    _setNavHistory(history);
  }
}

function getPreviousPage() {
  var history = _getNavHistory();
  if (history.length >= 2) {
    var prev = history[history.length - 2];
    if (prev && _isInternal(prev) && prev !== window.location.pathname + window.location.search) {
      return prev;
    }
  }
  return null;
}

function navigateBack(fallback) {
  var prev = getPreviousPage();
  if (prev) {
    var history = _getNavHistory();
    history.pop();
    _setNavHistory(history);
    window.location.href = prev;
  } else {
    window.location.href = fallback || "index.html";
  }
}

/* Push current page to history on load */
pushNavPage();

/* ---- Back Button (auto-wire if present) ---- */
(function() {
  var backBtn = document.getElementById("backButton");
  if (!backBtn) return;
  var fallback = backBtn.getAttribute("data-fallback") || "index.html";
  backBtn.addEventListener("click", function(e) {
    e.preventDefault();
    navigateBack(fallback);
  });
})();

/* ---- Works filter state persistence ---- */
var FILTER_KEY = "yhn_works_filter";

function saveWorksFilter(filter) {
  try { sessionStorage.setItem(FILTER_KEY, filter); } catch (e) {}
}

function restoreWorksFilter() {
  try { return sessionStorage.getItem(FILTER_KEY) || "all"; } catch (e) { return "all"; }
}

/* ---- Mobile navigation toggle ---- */
(function() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("topNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function() {
    var isOpen = nav.classList.toggle("is-open");
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

/* ---- Scroll progress bar ---- */
(function() {
  var bar = document.getElementById("scrollProgress");
  if (!bar) return;
  window.addEventListener("scroll", function() {
    var scrolled = document.documentElement.scrollTop;
    var total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (total > 0) bar.style.width = (scrolled / total * 100) + "%";
  }, { passive: true });
})();

/* ---- IntersectionObserver reveal animations ---- */
(function() {
  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function(entries) {
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