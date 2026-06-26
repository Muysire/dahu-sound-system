/* ============================================================
   DAHU SOUND SYSTEM — En-tête & pied de page communs
   Injectés automatiquement pour éviter de les recopier
   dans chaque fichier HTML.
   ============================================================ */

const DAHU_HEADER = `
<div class="rasta-banner"></div>

<div class="hero">
  <a href="index.html" class="hero-logo-link" aria-label="Retour à l'accueil">
    <img src="images/logo-dahu-white.png" alt="Logo Dahu Sound System" class="hero-logo-img">
  </a>
  <div class="hero-logo"><a href="index.html">Dahu Sound System</a></div>
  <div class="hero-sub">Association Culturelle · Sound System</div>
  <div class="hero-tagline">★ One Love · One Sound · One Vibe ★</div>
</div>

<div class="nav-wrapper">
  <div class="nav-inner">
    <button class="nav-burger" id="dahu-burger" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
    <nav class="nav" id="dahu-nav">
      <a class="nav-btn" href="index.html">👥 L'Équipe</a>
      <a class="nav-btn" href="histoire.html">🌱 Notre Histoire</a>
      <a class="nav-btn" href="sound-system.html">🔊 Le Sound System</a>
      <a class="nav-btn" href="planning.html">📅 Planning</a>
       <!-- <a class="nav-btn" href="investissements.html">💰 Investissements</a> -->
      <a class="nav-btn" href="musique.html">🎵 Musique</a>
      <a class="nav-btn" href="contact.html">📡 Contact</a>
    </nav>
  </div>
</div>`;

const DAHU_FOOTER = `
<div class="footer-rasta"></div>
<span class="footer-logo">Dahu Sound System</span><br>
Association loi 1901 · One Love, One Sound`;

/* En-tete : injecte immediatement (il se trouve avant ce script). */
(function () {
  const headerMount = document.getElementById('dahu-header');
  if (headerMount) headerMount.innerHTML = DAHU_HEADER;

  /* Menu burger (mobile) */
  const burger = document.getElementById('dahu-burger');
  const nav = document.getElementById('dahu-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.textContent = open ? '✕' : '☰';
    });
  }
})();

/* Pied de page : injecte une fois tout le DOM charge,
   car le <footer> se trouve plus bas dans la page. */
document.addEventListener('DOMContentLoaded', function () {
  const footerMount = document.getElementById('dahu-footer');
  if (footerMount) footerMount.innerHTML = DAHU_FOOTER;
});
