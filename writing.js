(() => {
  'use strict';
  const themeButton = document.querySelector('#theme-toggle');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = () => { try { return localStorage.getItem('bj-theme'); } catch { return null; } };
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton?.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#111725' : '#f7f9fc';
  }
  applyTheme(storedTheme() || (systemTheme.matches ? 'dark' : 'light'));
  themeButton?.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('bj-theme', theme); } catch {}
  });
  systemTheme.addEventListener('change', event => {
    if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light');
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const contents = document.querySelector('.article-toc details');
  if (!contents) return;
  const mobile = matchMedia('(max-width: 760px)');
  const syncContents = () => { contents.open = !mobile.matches; };
  syncContents();
  mobile.addEventListener('change', syncContents);
  contents.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobile.matches) contents.open = false;
      // Native anchor navigation still works without scripting; focus also follows
      // the reading position for keyboard and screen-reader users.
      const heading = document.getElementById(link.hash.slice(1));
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    });
  });

  const article = document.querySelector('.article-body');
  const headings = [...article.querySelectorAll('h2[id], h3[id], h4[id]')];
  const links = [...contents.querySelectorAll('nav a')];
  const progress = document.querySelector('.reading-progress');
  let scheduled = false;
  function updateReadingPosition() {
    scheduled = false;
    let current = headings[0]?.id;
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= 120) current = heading.id;
      else break;
    }
    links.forEach(link => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const rect = article.getBoundingClientRect();
    const distance = Math.max(1, rect.height - innerHeight);
    const fraction = Math.max(0, Math.min(1, -rect.top / distance));
    if (progress) progress.style.transform = `scaleX(${fraction})`;
  }
  function scheduleUpdate() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateReadingPosition);
    }
  }
  addEventListener('scroll', scheduleUpdate, { passive: true });
  addEventListener('resize', scheduleUpdate);
  updateReadingPosition();
})();
