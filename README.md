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


## Structure du projet

```
src/
├── components/          # Composants UI
│   ├── ui/              # Composants shadcn/ui
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
