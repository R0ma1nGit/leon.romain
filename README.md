# Portfolio - Romain LEON

Portfolio web interactif avec thème cyber/réseau, présentant mon parcours, mes projets techniques et mes compétences en administration réseaux & systèmes.

## Stack technique

- **Vite** - Build tool ultra-rapide
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **React Router** - Navigation SPA
- **shadcn/ui** - Composants UI accessibles
- **Tailwind CSS** - Styling utility-first
- **i18next** - Internationalisation (FR/EN)
- **EmailJS** - Formulaire de contact côté client
- **Recharts** - Visualisation de données

## Fonctionnalités

- **Design responsive** avec thème clair/sombre
- **Internationalisation** : français et anglais
- **CV interactif** avec navigation vers les sections du portfolio
- **Section projets** : comptes rendus détaillés avec topologies, technologies et résultats
- **Timeline d'expériences** avec missions et compétences développées
- **Section compétences** catégorisées (Réseaux, Supervision, Systèmes, Virtualisation...)
- **Certifications** avec scores par module
- **Formulaire de contact** intégré via EmailJS
- **Générateur de CV en direct** : éditeur temps réel avec export PDF

## Générateur de CV en direct

Accessible via l'icône 📄 dans le footer (ou directement à `/cv-builder`).

### Principe

Deux panneaux côte à côte :
- **Gauche** : Formulaire avec toutes les sections du CV (identité, formation, compétences, expériences, projets)
- **Droite** : Aperçu visuel du CV qui se met à jour en temps réel à chaque modification

### Fonctionnement

1. **Édition en direct** : chaque champ modifié met à jour immédiatement l'aperçu du CV
2. **Sauvegarde automatique** : toutes les données sont stockées dans le `localStorage` du navigateur. Elles persistent après un rafraîchissement de page
3. **Sections dynamiques** : ajoutez ou supprimez des formations, expériences et projets avec les boutons `+ Ajouter` / `Supprimer`
4. **Listes modifiables** : les compétences, tâches, KPIs et intérêts sont des listes avec ajout/suppression d'éléments
5. **Export PDF** : le bouton `Imprimer PDF` ouvre la boîte de dialogue d'impression du navigateur. Le rendu est optimisé pour une page A4, avec masquage automatique du panneau formulaire
6. **Export JSON** : sauvegardez vos données au format JSON pour les réimporter ultérieurement
7. **QR Code fonctionnel** : un QR code pointant vers votre portfolio est généré automatiquement dans la colonne de gauche

### Données pré-remplies

Le générateur est livré avec les données de votre CV papier (Romain LEON) :
- Formation (BUT/DUT Réseaux, Bac STI2D)
- Compétences (4 catégories : Réseaux, Systèmes, Supervision, Méthodologies)
- Expériences (CIVIS, AFI SAS)
- Projets (IoT, MPLS)

### Technologies utilisées

- `useCVStore` : hook React pour la gestion d'état avec persistance localStorage
- `window.print()` + `@media print` : export PDF propre et formaté
- API QR Server : génération de QR code dynamique

### Fichiers du CV Builder

```
src/
├── pages/
│   └── CVBuilder.tsx              # Page principale deux panneaux
├── components/
│   └── cv-builder/
│       ├── types.ts               # Modèles TypeScript du CV
│       ├── CVForm.tsx             # Formulaire d'édition
│       └── CVPreview.tsx          # Rendu visuel temps réel
└── hooks/
    └── useCVStore.ts              # Hook localStorage + état global
```

## Structure du projet

```
src/
├── components/          # Composants UI
│   ├── ui/              # Composants shadcn/ui
│   ├── cv-builder/      # Générateur de CV en direct
│   ├── Hero.tsx         # Section d'accueil
│   ├── About.tsx        # À propos & formation
│   ├── Skills.tsx       # Compétences
│   ├── Projects.tsx     # Projets techniques
│   ├── Experience.tsx   # Expériences professionnelles
│   ├── Certifications.tsx
│   ├── Contact.tsx      # Formulaire de contact
│   ├── InteractiveCV.tsx # CV interactif modal
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageSwitcher.tsx
├── pages/               # Pages de l'application
├── i18n/                # Traductions (fr.json, en.json)
├── hooks/               # Custom React hooks
├── lib/                 # Utilitaires
└── main.tsx             # Point d'entrée
```

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter le code
npm run lint
```

## Déploiement

Le projet peut être déployé sur tout hébergeur statique (Netlify, Vercel, GitHub Pages, etc.) après un `npm run build`. Les fichiers statiques sont générés dans le dossier `dist/`.

## Licence

Projet personnel — Tous droits réservés
