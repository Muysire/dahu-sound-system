# Dahu Sound System — Site web

Site statique multi-pages. Aucun outil à installer, aucune compilation :
ce sont de simples fichiers que GitHub Pages sert directement.

## 📁 Architecture des fichiers

```
.
├── index.html              → page L'Équipe (page d'accueil)
├── histoire.html           → page Notre Histoire
├── sound-system.html       → page Le Sound System (sous-onglets + galerie)
├── planning.html           → page Planning
├── investissements.html    → page Investissements
├── musique.html            → page Musique
├── contact.html            → page Contact
│
├── css/
│   └── style.css           → TOUT le style (charte violet / noir / blanc + responsive)
│
├── js/
│   ├── layout.js           → en-tête (logo + menu + burger mobile) et footer communs
│   └── script.js           → sous-onglets, surlignage du menu, galerie photo (lightbox)
│
└── images/                 → toutes les images du site
    ├── logo-dahu-white.png   (logo blanc utilisé dans l'en-tête, cliquable → accueil)
    ├── logo-dahu-violet.png  (variante violette, en réserve)
    ├── sound-system-1.jpg
    ├── sound-system-2.jpg
    └── logo-detail.jpg
```

## 🎨 Ce qui a changé (charte & contenu)

- **Charte graphique** : passage en **violet / noir / blanc** inspiré de la DA des
  photos (logo bouquetin, lumières néon), avec des touches de violet partout.
- **Logo** ajouté dans l'en-tête, **cliquable** pour revenir à l'accueil (sur toutes les pages).
- **Responsive** : s'adapte à ordinateur, tablette et téléphone. Sur mobile, le menu
  devient un **menu déroulant** (bouton ☰).
- **Galerie photos** : les 3 photos sont intégrées et **cliquables** (agrandissement plein écran).
- **Équipe** : « Comptable » → **Trésorier** ; texte des artistes ajusté.
- **Notre Histoire** : création officielle **07/2025** ; mention « fabriqué » ajoutée ;
  liens en **bleu clair**.
- **Sound System** : encart d'avertissement ; Leroy Merlin → « peinture, vernis ».
- **Contact** : Instagram **@dahu_sound_system**, mail **dahu.soundsystem@gmail.com**,
  logos Instagram et Gmail, texte « dire bonjour ».

## 🚀 Mettre en ligne sur GitHub Pages (glisser-déposer)

1. Va sur ton dépôt GitHub.
2. **Add file → Upload files**.
3. **Glisse-dépose** les 7 fichiers `.html` **ET** les dossiers `css/`, `js/` et
   `images/` (garde bien la structure des dossiers).
4. **Commit changes**.
5. Si besoin : **Settings → Pages → Source : `main` / `(root)`**.

> ⚠️ Conserve bien les dossiers `css/`, `js/` et `images/`. Sans eux, le site
> s'affichera sans style et sans photos.

## ✏️ Ajouter une photo plus tard

1. Dépose ton image dans le dossier `images/`.
2. Dans `sound-system.html`, copie une ligne de galerie en changeant le nom du fichier :
   ```html
   <div class="photo-item"><img src="images/mon-image.jpg" alt="Description" loading="lazy"></div>
   ```

## 🗺️ Où modifier quoi

| Je veux changer…                       | J'ouvre…                  |
|----------------------------------------|---------------------------|
| Les membres de l'équipe                | `index.html`              |
| La timeline / l'histoire               | `histoire.html`           |
| Config technique, photos, matos        | `sound-system.html`       |
| Les dates d'événements                 | `planning.html`           |
| Le budget                              | `investissements.html`    |
| Les liens musique                      | `musique.html`            |
| Les coordonnées / réseaux              | `contact.html`            |
| Une couleur, une police, le responsive | `css/style.css`           |
| Le menu, le logo ou le footer          | `js/layout.js`            |
