/* ============================================================
   DAHU SOUND SYSTEM — En-tête & pied de page communs
   Injectés automatiquement pour éviter de les recopier
   dans chaque fichier HTML.
   ============================================================ */

const DAHU_HEADER = `
<div class="rasta-banner">
  <span class="r"></span><span class="y"></span><span class="g"></span>
</div>

<div class="hero">
  <div class="hero-logo"><a href="index.html">Dahu Sound System</a></div>
  <div class="hero-sub">Association Culturelle · Sound System</div>
  <div class="hero-tagline">★ One Love · One Sound · One Vibe ★</div>
</div>

<div class="nav-wrapper">
  <nav class="nav">
    <a class="nav-btn" href="index.html">👥 L'Équipe</a>
    <a class="nav-btn" href="histoire.html">🌱 Notre Histoire</a>
    <a class="nav-btn" href="sound-system.html">🔊 Le Sound System</a>
    <a class="nav-btn" href="planning.html">📅 Planning</a>
    <a class="nav-btn" href="investissements.html">💰 Investissements</a>
    <a class="nav-btn" href="musique.html">🎵 Musique</a>
    <a class="nav-btn" href="contact.html">📡 Contact</a>
  </nav>
</div>`;

const DAHU_FOOTER = `
<div class="footer-rasta"><span class="r"></span><span class="y"></span><span class="g"></span></div>
<strong style="color:var(--rasta-yellow);font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:3px;">Dahu Sound System</strong><br>
Association loi 1901 · One Love, One Sound`;

/* En-tete : injecte immediatement (il se trouve avant ce script). */
(function () {
  const headerMount = document.getElementById('dahu-header');
  if (headerMount) headerMount.innerHTML = DAHU_HEADER;
})();

/* Pied de page : injecte une fois tout le DOM charge,
   car le <footer> se trouve plus bas dans la page. */
document.addEventListener('DOMContentLoaded', function () {
  const footerMount = document.getElementById('dahu-footer');
  if (footerMount) footerMount.innerHTML = DAHU_FOOTER;
});
