(function () {
  var isDashboard = window.location.pathname.indexOf('dashboard') !== -1;

  var rightContent = isDashboard
    ? /* ── DASHBOARD: centro + botones ── */
      '<div class="topbar-center">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
        'Datos históricos · Ene 2024 – Abr 2024' +
      '</div>' +
      '<div class="topbar-right">' +
        '<a class="back-link" href="./index.html">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>' +
          'Volver a la web' +
        '</a>' +
        '<button class="btn-export" onclick="exportarCSV()">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
          'Exportar' +
        '</button>' +
      '</div>'

    : /* ── LANDING: nav links ── */
      '<nav>' +
        '<a href="#como-funciona">Cómo funciona</a>' +
        '<a href="#beneficios">Beneficios</a>' +
        '<a href="./radar_3_min_dashboard.html">Dashboard</a>' +
        '<a class="nav-cta" href="#demo">' +
          'Solicita una demo ' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
        '</a>' +
      '</nav>';

  var logoHref = isDashboard ? './radar_3_min_dashboard.html' : '#';

  var html =
    '<header>' +
      '<div class="container header-inner">' +
        '<a class="brand-wrap brand-dark" href="' + logoHref + '" aria-label="ROUS Digital Projects">' +
          '<span class="brand-name">' +
            '<span class="brand-bracket">[</span>' +
            '<span class="brand-letter">R</span>' +
            '<span class="brand-bracket">]</span>' +
            '<span class="brand-ous">OUS</span>' +
          '</span>' +
          '<span class="brand-sub">Digital Projects</span>' +
        '</a>' +
        rightContent +
      '</div>' +
    '</header>';

  var placeholder = document.getElementById('site-header');
  if (placeholder) placeholder.outerHTML = html;
})();
