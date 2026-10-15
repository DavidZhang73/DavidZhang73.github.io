(() => {
  const key = '__Host-academic_language';
  const remember = (language) => {
    document.cookie = `${key}=${language}; Path=/; Max-Age=31536000; Secure; SameSite=Lax`;
  };

  // Capture before the theme's navigation handlers; retain normal link behavior.
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('.i18n-dropdown a[href], [data-language-choice]');
    if (!link) return;
    const target = new URL(link.href, location.href);
    const language = target.pathname.match(/^\/(en|zh)(?:\/|$)/)?.[1];
    if (target.origin === location.origin && language) remember(language);
  }, true);

  // Origin/GitHub Pages fallback when the edge router is unavailable or absent.
  if (document.documentElement.dataset.languageRedirect !== 'true') return;
  const explicit = new URL(location.href).searchParams.get('lang');
  const stored = document.cookie.split(';').map((part) => part.trim())
    .find((part) => part === `${key}=en` || part === `${key}=zh`)?.split('=')[1];
  const browser = (navigator.languages || [navigator.language])
    .map((tag) => tag?.toLowerCase().split('-')[0])
    .find((tag) => tag === 'en' || tag === 'zh');
  const manual = explicit === 'en' || explicit === 'zh' ? explicit : null;
  if (manual) remember(manual);
  const target = new URL(location.href);
  target.pathname = `/${manual || stored || browser || 'en'}/`;
  target.searchParams.delete('lang');
  location.replace(target.href);
})();
