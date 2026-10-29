(() => {
  'use strict';
  const selector = 'a[data-inquiry], a[data-contact], a[data-apply]';
  const formId = link => {
    try {
      const url = new URL(link.href);
      const match = url.pathname.match(/^\/r\/([A-Za-z0-9]+)\/?$/);
      return url.origin === 'https://tally.so' && match ? match[1] : '';
    } catch { return ''; }
  };
  const supported = typeof HTMLDialogElement !== 'undefined' &&
    typeof HTMLDialogElement.prototype.showModal === 'function';
  document.querySelectorAll(selector).forEach(link => {
    if (!formId(link)) return;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    if (supported) link.setAttribute('aria-haspopup', 'dialog');
  });
  if (!supported) return;

  let dialog, frame, loading, fallback, opener;
  const createDialog = () => {
    dialog = document.createElement('dialog');
    dialog.className = 'form-dialog';
    dialog.setAttribute('aria-labelledby', 'form-dialog-title');
    dialog.innerHTML = '<div class="form-dialog-header"><h2 id="form-dialog-title"></h2>' +
      '<button class="form-dialog-close" type="button" aria-label="Close form" autofocus>Close <span aria-hidden="true">×</span></button></div>' +
      '<div class="form-dialog-body"><iframe class="form-dialog-frame" title="Contact form" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
      '<p class="form-dialog-loading" role="status">Loading form…</p></div>' +
      '<p class="form-dialog-footer"><a target="_blank" rel="noopener noreferrer">Open form in a new tab</a></p>';
    frame = dialog.querySelector('iframe');
    loading = dialog.querySelector('[role="status"]');
    fallback = dialog.querySelector('.form-dialog-footer a');
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    frame.addEventListener('load', () => { if (dialog.open) loading.hidden = true; });
    frame.addEventListener('error', () => {
      loading.textContent = 'Use the link below to open this form in a new tab.';
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right ||
          event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      frame.removeAttribute('src');
      document.body.classList.remove('form-open');
      if (opener?.isConnected) opener.focus({ preventScroll: true });
      opener = null;
    });
    document.body.append(dialog);
  };

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
        event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest(selector) : null;
    const id = link && formId(link);
    if (!id) return;
    if (!dialog) createDialog();
    const title = link.dataset.apply === 'build' ? 'Founder Build Sprint application' :
      link.dataset.apply === 'advisory' ? 'Technical Advisory inquiry' : 'Message Hector';
    const embed = new URL(`/embed/${id}`, 'https://tally.so');
    embed.searchParams.set('alignLeft', '1');
    embed.searchParams.set('hideTitle', '1');
    dialog.querySelector('h2').textContent = title;
    frame.title = title;
    fallback.href = link.href;
    loading.hidden = false;
    loading.textContent = 'Loading form…';
    frame.src = embed.href;
    opener = link;
    try {
      dialog.showModal();
      document.body.classList.add('form-open');
      event.preventDefault();
    } catch {
      // Keep the original new-tab navigation if a dialog cannot open.
      frame.removeAttribute('src');
      opener = null;
    }
  });
})();
