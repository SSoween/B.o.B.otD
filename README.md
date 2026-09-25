# B.O.B. — Sac d'Urgence

> Application PWA hors-ligne pour préparer et gérer un sac d'évacuation familial.
> **Se préparer simplifie la vie.**

---

## 📖 Présentation

**B.O.B.** (pour *Bug-Out Bag* / *Sac d'Urgence*) est une application web progressive (PWA) 
conçue pour fonctionner **100% hors-ligne**, pensée pour un usage familial et personnel 
en cas d'urgence (évacuation, catastrophe naturelle, coupure prolongée, etc.).

Elle permet de :
- Gérer un inventaire de sac d'évacuation complet et personnalisable
- Accéder à un manuel de survie de 34+ techniques (avec schémas)
- Préparer un plan de communication radio familial et radioamateur
- Visualiser une carte d'évacuation schématique
- Se préparer à des situations extrêmes (nucléaire, etc.)
- S'entraîner via un quiz gamifié

---

## ✨ Fonctionnalités

### 🎒 Sac d'évacuation
- Inventaire par 9 catégories (Eau, Vêtements, Abris, Santé, Feu, Comms, Outils, Papiers, Fun)
- Quantités ajustables par item
- Ajout d'items personnalisés
- Sauvegarde automatique en local

### 📻 Comms Radio
- **Plan Famille** : 3 fréquences de contact hiérarchisées (UHF FRS → VHF radioamateur)
- **Urgences** : bandes VHF/UHF/HF, fréquences maritimes, aéronautiques, forestières
- **Mes Radios** : configuration par radio (Baofeng UV5R, Radtel, Xiegu X6100, etc.)
- Génération d'une **carte famille PDF** format A5 (imprimable)

### 📚 Manuel de Survie
- 34+ techniques classées par catégorie
- Filtres : Tous / ⭐ Favoris / 🔴 Essentiels
- Schémas SVG pour les techniques clés
- Bilingue FR / EN

### 🗺️ Carte d'Évacuation
- Schéma schématique de sortie de Montréal (rayon 50 km)
- Axes secondaires prioritaires, autoroutes en alternative
- Zoom et déplacement tactile (pinch)

### ☢️ Situations Extrêmes
- Accident Nucléaire : Règle des 7, 3 règles d'or, iode, compteur Geiger

### 🎮 Training Game
- Quiz avec XP et progression par rangs
- Test de réflexes face à des scénarios d'urgence

### Autres
- 🎨 Mode Nuit
- 🌍 Bilingue FR / EN
- 💾 Sauvegarde locale (localStorage)
- 📱 Installable sur iPhone/iPad/Android
- 🔄 Mise à jour automatique via Service Worker

---

## 🛠️ Stack technique

| Composant | Technologie |
|---|---|
| Framework UI | Aucun (Vanilla JS) |
| CSS | Bootstrap 5 + CSS custom |
| Icônes | Bootstrap Icons |
| PDF | jsPDF |
| Stockage | localStorage |
| Offline | Service Worker + Cache API |
| Hébergement | GitHub Pages |
| Tracker | Aucun |

**100% statique, aucune dépendance serveur.**

---
