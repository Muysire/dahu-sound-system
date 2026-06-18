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

  /* 2) Lightbox : agrandir les photos au clic */
  const photos = document.querySelectorAll('.photo-item img');
  if (photos.length) {
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
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }
});
