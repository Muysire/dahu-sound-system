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

/* Au chargement de chaque page :
   - surligne automatiquement le bon bouton du menu
     en comparant le nom du fichier HTML courant. */
document.addEventListener('DOMContentLoaded', function () {
  let page = window.location.pathname.split('/').pop();
  if (!page || page === '') page = 'index.html';

  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    const href = btn.getAttribute('href');
    if (href === page) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
});
