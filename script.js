/* ============================================================
 * YHN® Digital Art Archive — Shared Scripts
 * Loaded on every page. Handles nav, scroll progress, reveals,
 * and navigation history tracking.
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

/* ---- Cyber Buddy (all pages, draggable) ---- */
(function() {
  var SVG = '<svg class="buddy-sprite" viewBox="0 0 32 32" width="80" height="80" aria-hidden="true" shape-rendering="crispEdges">'
    + '<rect x="10" y="4" width="12" height="2" fill="#B44CFF" opacity="0.4"/>'
    + '<rect x="8" y="6" width="16" height="12" rx="1" fill="#16162A"/>'
    + '<rect x="8" y="6" width="16" height="2" fill="#B44CFF" opacity="0.3"/>'
    + '<rect x="10" y="10" width="4" height="3" fill="#FF3CAC"/>'
    + '<rect x="18" y="10" width="4" height="3" fill="#FF3CAC"/>'
    + '<rect x="14" y="15" width="4" height="1" fill="#45F3E2" opacity="0.6"/>'
    + '<rect x="11" y="18" width="10" height="8" rx="1" fill="#16162A"/>'
    + '<rect x="11" y="18" width="10" height="1" fill="#45F3E2" opacity="0.3"/>'
    + '<rect x="13" y="21" width="2" height="2" fill="#45F3E2" opacity="0.7"/>'
    + '<rect x="17" y="21" width="2" height="2" fill="#45F3E2" opacity="0.7"/>'
    + '<rect x="6" y="19" width="2" height="4" fill="#B44CFF" opacity="0.5"/>'
    + '<rect x="24" y="19" width="2" height="4" fill="#B44CFF" opacity="0.5"/>'
    + '<rect x="12" y="27" width="3" height="2" fill="#16162A"/>'
    + '<rect x="17" y="27" width="3" height="2" fill="#16162A"/>'
    + '</svg>';

  var container = document.createElement("div");
  container.id = "cyberBuddy";
  container.className = "cyber-buddy";
  container.setAttribute("aria-label", "Cyber Buddy 数字助手");
  container.setAttribute("role", "button");
  container.setAttribute("tabindex", "0");
  container.innerHTML =
    '<div class="buddy-speech" aria-hidden="true">你好！我是 Cyber Buddy 👾</div>'
    + SVG
    + '<div class="buddy-menu" role="menu" aria-hidden="true">'
    + '<a class="buddy-menu-item" href="./works.html" role="menuitem">查看作品 →</a>'
    + '<a class="buddy-menu-item" href="./terminal.html" role="menuitem">&gt;_ 进入终端</a>'
    + '<button class="buddy-menu-close" type="button" aria-label="关闭菜单">×</button>'
    + '</div>';

  document.body.appendChild(container);

  var isMenuOpen = false;
  var isDragging = false;
  var startX = 0, startY = 0;
  var offX = 0, offY = 0;

  function openMenu() {
    isMenuOpen = true;
    container.classList.add("is-menu-open");
    container.setAttribute("aria-expanded", "true");
    var firstItem = container.querySelector(".buddy-menu-item");
    if (firstItem) firstItem.focus();
  }

  function closeMenu() {
    isMenuOpen = false;
    container.classList.remove("is-menu-open");
    container.setAttribute("aria-expanded", "false");
    container.focus();
  }

  /* Drag to move */
  container.addEventListener("pointerdown", function(e) {
    if (e.target.closest(".buddy-menu-item") || e.target.closest(".buddy-menu-close")) return;
    if (e.button !== 0) return;
    isDragging = false;
    startX = e.clientX;
    startY = e.clientY;
    var rect = container.getBoundingClientRect();
    offX = e.clientX - rect.left;
    offY = e.clientY - rect.top;
    container.setPointerCapture(e.pointerId);
  });

  container.addEventListener("pointermove", function(e) {
    if (e.buttons !== 1 || !container.hasPointerCapture(e.pointerId)) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      isDragging = true;
      container.classList.add("is-dragging");
      var x = e.clientX - offX;
      var y = e.clientY - offY;
      var maxX = window.innerWidth - 80;
      var maxY = window.innerHeight - 80;
      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));
      container.style.left = x + "px";
      container.style.top = y + "px";
      container.style.bottom = "auto";
      container.style.right = "auto";
      container.classList.add("is-dragged");
    }
  });

  container.addEventListener("pointerup", function(e) {
    container.releasePointerCapture(e.pointerId);
    container.classList.remove("is-dragging");
    if (!isDragging) {
      if (isMenuOpen) { closeMenu(); } else { openMenu(); }
    }
    isDragging = false;
  });

  /* Keyboard */
  container.addEventListener("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isMenuOpen) { closeMenu(); } else { openMenu(); }
    }
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });

  var closeBtn = container.querySelector(".buddy-menu-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      closeMenu();
    });
  }

  document.addEventListener("click", function(e) {
    if (isMenuOpen && !container.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });
})();
