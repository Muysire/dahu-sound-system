/* ============================================================
   DAHU SOUND SYSTEM — Script partagé
   ============================================================ */

/* Sous-onglets de la page "Le Sound System"
   (Plan / Photos / Construction / Matos) */
function showSub(id) {
  document.querySelectorAll('.sub-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  /* 1) Surligne le bon bouton du menu selon la page courante */
  let page = window.location.pathname.split('/').pop();
  if (!page || page === '') page = 'index.html';
  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    const href = btn.getAttribute('href');
    btn.classList.toggle('active', href === page);
  });

  /* 2) Lightbox : agrandir les photos et les aperçus de plans au clic */
  const photos = document.querySelectorAll('.photo-item img');
  const planThumbs = document.querySelectorAll('.plan-thumb[data-zoom]');
  if (photos.length || planThumbs.length) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<img alt="">';
    document.body.appendChild(lb);
    const lbImg = lb.querySelector('img');

    photos.forEach(function (img) {
      img.parentElement.addEventListener('click', function () {
        lbImg.src = img.src;
        lb.classList.add('open');
      });
    });

    planThumbs.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // on agrandit au lieu d'ouvrir un onglet
        const img = link.querySelector('img');
        lbImg.src = img ? img.src : link.getAttribute('href');
        lb.classList.add('open');
      });
    });

    lb.addEventListener('click', function () { lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }
});
