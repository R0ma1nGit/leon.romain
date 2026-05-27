

# Plan : Ajouter une section Certifications (MOOC ANSSI)

## Contenu

4 modules MOOC de l'ANSSI (SecNumAcademie) :
1. Panorama de la SSI
2. Securite de l'authentification
3. Securite sur Internet
4. Securite du poste de travail et nomadisme

## Fichiers a creer/modifier

### 1. `src/components/Certifications.tsx` (nouveau)

- Section avec titre "Certifications & Formations"
- Grille de cartes (2x2 desktop, 1 colonne mobile)
- Chaque carte : icone Shield/Lock, nom du module, badge "ANSSI - SecNumAcademie", badge "MOOC"
- Style coherent avec le theme cyber (border-glow, couleurs primary/secondary)

### 2. `src/i18n/locales/fr.json` et `en.json`

Ajouter :
```json
"certifications": {
  "title": "Certifications & Formations",
  "provider": "ANSSI - SecNumAcadémie",
  "type": "MOOC",
  "modules": [
    "Panorama de la SSI",
    "Sécurité de l'authentification",
    "Sécurité sur Internet",
    "Sécurité du poste de travail et nomadisme"
  ]
}
```

### 3. `src/pages/Index.tsx`

Importer et placer `<Certifications />` entre Experience et Contact.

### 4. `src/components/Navigation.tsx`

Ajouter un lien "Certifications" dans la navigation.

## Design

```text
┌─────────────────────┐  ┌─────────────────────┐
│ 🛡 Panorama SSI     │  │ 🔐 Sécurité         │
│ ANSSI SecNumAcadémie │  │    authentification  │
│ [MOOC]              │  │ ANSSI [MOOC]         │
└─────────────────────┘  └─────────────────────┘
┌─────────────────────┐  ┌─────────────────────┐
│ 🌐 Sécurité sur     │  │ 💻 Sécurité poste   │
│    Internet         │  │    de travail        │
│ ANSSI [MOOC]        │  │ ANSSI [MOOC]         │
└─────────────────────┘  └─────────────────────┘
```

