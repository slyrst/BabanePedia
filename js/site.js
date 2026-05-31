/* site.js — shared nav + helpers for babanepedia.com */

(function () {

  /* ── inject header + nav ── */
  const PAGE = location.pathname.split('/').pop() || 'index.html';

  const PAGES = [
    { href: 'index.html',       label: '/ home /'       },
    { href: 'rules.html',       label: '/ rules /'      },
    { href: 'gallery.html',     label: '/ gallery /'    },
    { href: 'players.html',     label: '/ players /'    },
    { href: 'contact.html',     label: '/ contact /'    },
    { href: 'apply.html',       label: '[ APPLY ]'      },
  ];

  function buildHeader() {
    const h = document.getElementById('header');
    if (!h) return;
    h.innerHTML = `
      <a href="index.html" class="site-title">babanepedia</a>
      <span class="site-sub">the greatest minecraft server</span>
      <span class="server-ip" title="click to copy" id="ip-btn">babanepedia.com</span>
    `;
    document.getElementById('ip-btn').addEventListener('click', function () {
      navigator.clipboard.writeText('play.babanepedia.com').then(() => {
        this.textContent = 'copied!';
        setTimeout(() => { this.textContent = 'play.babanepedia.com'; }, 1500);
      });
    });
  }

  function buildNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    nav.innerHTML = PAGES.map(p =>
      `<a href="${p.href}" class="${PAGE === p.href ? 'active' : ''}">${p.label}</a>`
    ).join('');
  }

  function buildFooter() {
    const f = document.getElementById('footer');
    if (!f) return;
    f.innerHTML = `
      babanepedia.com &mdash; all creepers welcome &mdash;
      <a href="contact.html">discord</a> &mdash;
      <a href="rules.html">rules</a>
    `;
  }

  /* ── run on DOM ready ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    buildHeader();
    buildNav();
    buildFooter();
  }

})();
