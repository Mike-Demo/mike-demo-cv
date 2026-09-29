'use strict';

/* ============================================================
   Pure slug logic (no DOM) — unit-testable in node.
   ============================================================ */

var RESERVED_SLUGS = {
  'adventure': true,
  'api': true,
  'assets': true,
  'admin': true,
  'static': true,
  'index.html': true,
  'indexhtml': true
};

function sanitizeSlug(raw) {
  return String(raw || '')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .slice(0, 24)
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/* First path segment -> slug, or null for the generic greeting. */
function parseSlug(pathname) {
  var parts = String(pathname || '').split('/').filter(function (p) { return p.length > 0; });
  var raw = parts.length ? parts[0] : '';
  var lowered = raw.toLowerCase();
  if (!lowered || RESERVED_SLUGS[lowered]) return null;
  var slug = sanitizeSlug(raw);
  if (!slug || RESERVED_SLUGS[slug]) return null;
  return slug;
}

function displayName(slug) {
  if (!slug) return 'Traveler';
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

/* ============================================================
   App (DOM). Guarded so the pure functions above can be
   loaded in node for testing.
   ============================================================ */

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  init();
}

function init() {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Resolve the path: honor the 404.html handoff when a static host
     serves it instead of the _redirects rewrite. */
  var path = window.location.pathname;
  try {
    var saved = window.sessionStorage.getItem('mdw_slug_path');
    if (saved) {
      path = saved;
      window.sessionStorage.removeItem('mdw_slug_path');
      window.history.replaceState(null, '', '/');
    }
  } catch (e) { /* storage unavailable; carry on */ }

  var slug = parseSlug(path);
  var name = displayName(slug);

  /* SEO: personalized slug URLs must never be indexed. */
  if (slug) {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'robots');
    meta.setAttribute('content', 'noindex, nofollow');
    document.head.appendChild(meta);
    var canon = document.createElement('link');
    canon.setAttribute('rel', 'canonical');
    canon.setAttribute('href', 'https://mikedemo.work/');
    document.head.appendChild(canon);
    document.title = 'Hello, ' + name + ' \u2014 Mike "Demo" Demopoulos';
  }

  var terminal = document.getElementById('terminal');
  var srStatus = document.getElementById('srStatus');
  var stage = document.getElementById('stage');
  var canvas = document.getElementById('rain');
  var main = document.getElementById('dossier');
  var footer = document.getElementById('siteFooter');
  var skip = document.getElementById('skipIntro');
  var gameLink = document.getElementById('gameLink');

  var intro = { cancelled: false, done: false };
  var rain = createRain(canvas);

  var LINES = [
    'Hello, ' + name + '.',
    '> Establishing secure connection... OK',
    '> Decrypting dossier... OK'
  ];

  function delay(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function announce(text) {
    srStatus.textContent = '';
    srStatus.textContent = text;
  }

  function typeLines() {
    var chain = Promise.resolve();
    LINES.forEach(function (text, i) {
      chain = chain.then(function () {
        if (intro.cancelled) return;
        var p = document.createElement('p');
        p.className = 'tline';
        terminal.appendChild(p);
        return typeChars(p, text).then(function () {
          announce(text);
          return delay(i === 0 ? 650 : 450);
        });
      });
    });
    return chain;
  }

  function typeChars(el, text) {
    return new Promise(function (resolve) {
      var i = 0;
      (function tick() {
        if (intro.cancelled || i >= text.length) { resolve(); return; }
        el.textContent += text.charAt(i);
        i += 1;
        /* type two chars per tick to keep the intro snappy */
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i += 1;
        }
        setTimeout(tick, 26);
      })();
    });
  }

  function revealDossier() {
    if (intro.done) return;
    intro.done = true;
    stage.classList.add('fade');
    canvas.classList.add('dim');
    main.hidden = false;
    footer.hidden = false;
    skip.classList.add('gone');
    if (gameLink) gameLink.classList.add('gone');
    var items = main.querySelectorAll('.reveal');
    for (var i = 0; i < items.length; i++) {
      items[i].style.animationDelay = (i * 0.1) + 's';
      items[i].classList.add('in');
    }
  }

  function skipIntro() {
    intro.cancelled = true;
    rain.stop();
    stage.classList.add('gone');
    revealDossier();
  }

  skip.addEventListener('click', function (e) {
    e.preventDefault();
    skipIntro();
  });

  setupExitIntent(name);

  if (reduced) {
    canvas.classList.add('gone');
    LINES.forEach(function (text) {
      var p = document.createElement('p');
      p.className = 'tline';
      p.textContent = text;
      terminal.appendChild(p);
    });
    announce(LINES.join(' '));
    stage.classList.add('gone');
    revealDossier();
  } else {
    typeLines().then(function () {
      if (intro.cancelled) return;
      rain.start();
      return delay(5200);
    }).then(function () {
      if (intro.cancelled) return;
      revealDossier();
    });
  }
}

/* ---------- matrix rain canvas ---------- */

function createRain(canvas) {
  var ctx = canvas.getContext('2d');
  var FONT = 16;
  var GLYPHS = '\u30A2\u30AB\u30B5\u30BF\u30CA\u30CF\u30DE\u30E4\u30E9\u30EF0123456789ABCDEF$#*+';
  var w = 0, h = 0, cols = 0, drops = [], speeds = [];
  var raf = 0, last = 0, running = false, onResize = null;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = FONT + 'px "Courier New", monospace';
    cols = Math.max(1, Math.floor(w / FONT));
    drops = [];
    speeds = [];
    for (var i = 0; i < cols; i++) {
      drops[i] = Math.random() * -40;
      speeds[i] = 0.5 + Math.random() * 0.9;
    }
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
  }

  function frame(t) {
    if (!running) return;
    raf = window.requestAnimationFrame(frame);
    if (document.hidden) { last = t; return; }
    if (t - last < 40) return; /* ~25fps: smooth enough with trails, cheap */
    last = t;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2bff5e';
    for (var i = 0; i < cols; i++) {
      var ch = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      var y = drops[i] * FONT;
      ctx.fillText(ch, i * FONT, y);
      if (y > h && Math.random() > 0.976) drops[i] = 0;
      drops[i] += speeds[i];
    }
  }

  return {
    start: function () {
      if (running) return;
      running = true;
      resize();
      onResize = resize;
      window.addEventListener('resize', onResize);
      raf = window.requestAnimationFrame(frame);
    },
    stop: function () {
      running = false;
      if (raf) window.cancelAnimationFrame(raf);
      if (onResize) window.removeEventListener('resize', onResize);
      canvas.classList.add('gone');
    }
  };
}

/* ---------- exit intent (desktop, fine pointer, no touch) ---------- */

function setupExitIntent(name) {
  var fine = window.matchMedia('(pointer: fine)').matches;
  var touch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (!fine || touch) return;

  var backdrop = document.getElementById('exitBackdrop');
  var dialog = document.getElementById('exitDialog');
  var exitName = document.getElementById('exitName');
  var browseBtn = document.getElementById('browseBtn');
  var open = false;
  var lastFocused = null;

  function wasShown() {
    try { return !!window.sessionStorage.getItem('mdw_exit_shown'); }
    catch (e) { return false; }
  }
  function markShown() {
    try { window.sessionStorage.setItem('mdw_exit_shown', '1'); }
    catch (e) { /* ignore */ }
  }

  function closeModal() {
    if (!open) return;
    open = false;
    backdrop.hidden = true;
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function openModal() {
    if (open || wasShown()) return;
    markShown();
    open = true;
    exitName.textContent = name;
    lastFocused = document.activeElement;
    backdrop.hidden = false;
    dialog.focus();
  }

  document.addEventListener('mouseout', function (e) {
    if (open || wasShown()) return;
    if (e.relatedTarget) return;      /* moving between elements */
    if (e.clientY > 0) return;        /* only the top edge = leaving */
    /* wait until the intro has finished so we never interrupt the show */
    var stage = document.getElementById('stage');
    if (stage && !stage.classList.contains('gone') && !stage.classList.contains('fade')) return;
    openModal();
  });

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });
  browseBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
}
