(() => {
  'use strict';
  const config = window.SITE_CONFIG || {};
  const https = value => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; }
    catch { return ''; }
  };
  const linkedIn = https(config.linkedInUrl) || 'https://www.linkedin.com/in/hectorferronato/';
  const email = typeof config.contactEmail === 'string' ? config.contactEmail.trim() : '';
  const fallback = /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email) ? `mailto:${email}` : linkedIn;
  document.querySelectorAll('[data-apply]').forEach(link => {
    const build = link.dataset.apply === 'build';
    const application = https(build ? config.buildApplicationUrl : config.advisoryApplicationUrl);
    link.href = application || fallback;
    link.textContent = (application ? (build ? 'Apply for a Build Sprint' : 'Request Technical Advisory') : (build ? 'Discuss a Build Sprint' : 'Discuss Technical Advisory')) + ' ';
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('viewBox', '0 0 16 16');
    arrow.setAttribute('class', 'arrow-icon');
    arrow.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M3 13 13 3M3 3h10v10');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.3');
    arrow.append(path);
    link.append(arrow);
  });
  document.querySelectorAll('[data-contact-note]').forEach(note => {
    note.textContent = 'Applications use a hosted form when available. Otherwise, contact Hector ' + (fallback.startsWith('mailto:') ? 'by email' : 'on LinkedIn') + ' to discuss fit. No information is collected on this website.';
  });
  document.querySelectorAll('[data-availability]').forEach(el => {
    if (typeof config.availability === 'string' && config.availability.trim()) el.textContent = config.availability;
  });
  if (config.portraitUrl) {
    try {
      const url = new URL(config.portraitUrl, document.baseURI);
      if (url.origin === location.origin || url.protocol === 'https:') {
        const img = new Image();
        img.alt = 'Hector Ferronato';
        img.onload = () => document.querySelectorAll('[data-portrait]').forEach(el => el.replaceChildren(img));
        img.src = url.href;
      }
    } catch { /* Keep the monogram when a portrait cannot be loaded. */ }
  }
  const analytics = https(config.analyticsScriptUrl);
  if (analytics) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = analytics;
    if (config.analyticsSiteId) script.dataset.websiteId = config.analyticsSiteId;
    document.head.append(script);
  }
})();
