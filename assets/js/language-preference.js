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

})();
