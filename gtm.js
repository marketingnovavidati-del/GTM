(function () {
  var GTM_ID = 'GTM-WZLTSQ759';

  // ─── 1. Script do <head> ────────────────────────────────────────────────────
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', GTM_ID);

  // ─── 2. <noscript> do <body> ────────────────────────────────────────────────
  // Garante que o noscript seja inserido logo após a abertura do <body>
  function insertNoScript() {
    var ns = document.createElement('noscript');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + GTM_ID;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.cssText = 'display:none;visibility:hidden';
    ns.appendChild(iframe);

    // Insere como primeiro filho do <body>
    var body = document.body || document.getElementsByTagName('body')[0];
    if (body) {
      body.insertBefore(ns, body.firstChild);
    } else {
      // Caso o body ainda não exista, aguarda o DOM
      document.addEventListener('DOMContentLoaded', function () {
        var b = document.body || document.getElementsByTagName('body')[0];
        if (b) b.insertBefore(ns, b.firstChild);
      });
    }
  }

  insertNoScript();
})();
