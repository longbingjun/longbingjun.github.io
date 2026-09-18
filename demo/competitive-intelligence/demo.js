(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('#theme-toggle');
  const video = document.querySelector('#walkthrough-video');
  const source = document.querySelector('#walkthrough-source');
  const captionState = document.querySelector('#caption-state');
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const media = {
    zh: {
      video: '../../assets/competitive-demo-zh.mp4?v=20260917-v3',
      caption: '中英双语字幕 · 中文旁白'
    },
    en: {
      video: '../../assets/competitive-demo-en.mp4?v=20260917-v3',
      caption: 'Bilingual captions · English narration'
    }
  };
  const chapterStarts = [0, 27, 67, 92, 125, 152, 187, 222, 252, 278, 301, 337];
  const chapterItems = [...document.querySelectorAll('#chapter-list li')];

  function updateThemeLabel() {
    themeButton.setAttribute('aria-label', root.dataset.theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#111725' : '#f7f9fc';
  }

  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('bj-theme', root.dataset.theme); } catch (_) {}
    updateThemeLabel();
  });

  languageButtons.forEach(button => button.addEventListener('click', () => {
    const language = button.dataset.language;
    const selected = media[language];
    const currentTime = video.currentTime || 0;
    const wasPlaying = !video.paused;
    languageButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    video.pause();
    source.src = selected.video;
    captionState.textContent = selected.caption;
    video.load();
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = Math.min(currentTime, video.duration || currentTime);
      if (wasPlaying) video.play().catch(() => {});
    }, { once: true });
  }));

  chapterItems.forEach((item, index) => {
    item.querySelector('button').addEventListener('click', () => {
      chapterItems.forEach(chapter => chapter.classList.remove('is-current'));
      item.classList.add('is-current');
      video.currentTime = chapterStarts[index];
      video.play().catch(() => {});
    });
  });

  video.addEventListener('timeupdate', () => {
    let current = 0;
    chapterStarts.forEach((start, index) => {
      if (video.currentTime >= start) current = index;
    });
    chapterItems.forEach((item, index) => item.classList.toggle('is-current', index === current));
  });

  updateThemeLabel();
})();
