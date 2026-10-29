(() => {
  'use strict';
  const config = window.SITE_CONFIG || {};
  const localAsset = value => {
    if (typeof value !== 'string' || !value.trim()) return '';
    try {
      const url = new URL(value, document.baseURI);
      return url.origin === location.origin && ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  };
  const https = value => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; }
    catch { return ''; }
  };
  const linkedIn = https(config.linkedInUrl) || 'https://www.linkedin.com/in/hectorferronato/';
  const email = typeof config.contactEmail === 'string' ? config.contactEmail.trim() : '';
  const fallback = /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email) ? `mailto:${email}` : linkedIn;
  document.querySelectorAll('[data-contact]').forEach(link => { link.href = fallback; });
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
    note.textContent = 'Contact Hector ' + (fallback.startsWith('mailto:') ? 'by email' : 'on LinkedIn') + ' to discuss fit, or use a configured application link. No information is collected on this website.';
  });
  document.querySelectorAll('[data-availability]').forEach(el => {
    if (typeof config.availability === 'string' && config.availability.trim()) el.textContent = config.availability;
  });
  const portrait = localAsset(config.portraitUrl);
  const portraitSlots = [...document.querySelectorAll('[data-portrait]')];
  if (portrait && portraitSlots.some(slot => {
    const current = slot.querySelector('img');
    return !current || current.src !== portrait;
  })) {
    const img = new Image();
    img.alt = 'Hector Ferronato';
    img.width = 800;
    img.height = 800;
    img.onload = () => document.querySelectorAll('[data-portrait]').forEach(el => el.replaceChildren(img.cloneNode()));
    img.src = portrait;
  }
  const serviceImages = [
    ['build', config.buildImageUrl, 'AI-generated illustrative scene of Hector building software at a laptop'],
    ['advisory', config.advisoryImageUrl, 'AI-generated illustrative scene of Hector discussing software architecture with another person']
  ];
  serviceImages.forEach(([service, value, alt]) => {
    const source = localAsset(value);
    const slots = [...document.querySelectorAll(`[data-service-media="${service}"]`)];
    if (!source || !slots.length) return;
    if (slots.every(slot => {
      const current = slot.querySelector('img');
      return current && current.src === source;
    })) return;
    const image = new Image();
    image.alt = alt;
    image.className = 'service-photo';
    image.dataset.serviceImage = service;
    image.decoding = 'async';
    image.onload = () => {
      image.width = image.naturalWidth;
      image.height = image.naturalHeight;
      slots.forEach(slot => {
        slot.replaceChildren(image.cloneNode());
        slot.hidden = false;
        const layout = slot.closest('.detail-grid');
        if (layout) layout.classList.remove('detail-grid--text-only');
      });
    };
    // Keep the complete text layout when an optional image cannot load.
    image.src = source;
  });
  const analytics = localAsset(config.analyticsScriptUrl);
  if (analytics) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = analytics;
    if (config.analyticsSiteId) script.dataset.websiteId = config.analyticsSiteId;
    document.head.append(script);
  }
})();
