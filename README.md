# Med's Cybernetic Garden

Un système de notes publiques versionnées sur les systèmes, l'automatisation, la
connaissance et le jugement humain. Chaque texte porte un `status`, un niveau de
`confidence` et une date de révision — les hypothèses réfutées ne sont pas
supprimées, elles sont déplacées dans le **Laboratoire**.

Construit avec [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Démarrer

```bash
npm install
npm run dev      # serveur local
npm run build    # build de production (valide le contenu au préalable)
npm run preview  # prévisualiser le build
```

## Scripts de contenu

| Commande | Rôle |
| --- | --- |
| `npm run new:article` | Assistant interactif de création d'article |
| `npm run validate:content` | Vérifie le frontmatter de tous les articles |
| `npm run generate:index` | Génère `public/generated/content-index.json` (RAG) |
| `npm run content:check` | Validation + génération d'index |

La validation et l'indexation tournent automatiquement en `prebuild`.

## Ajouter un article

Trois façons, de la plus simple à la plus contrôlée.

### 1. Depuis le navigateur, sur GitHub (aucune installation)

1. Aller dans le dossier de la catégorie, par exemple
   [`src/content/docs/lab/`](https://github.com/lostmedoulle/blog-gardencybernetic/tree/main/src/content/docs/lab).
2. **Add file → Create new file** (ou **Upload files** pour déposer un `.md`
   déjà écrit).
3. Nommer le fichier `mon-article.md` — le nom du fichier devient l'URL.
4. Coller le contenu, avec au minimum ces quatre lignes en tête :

```markdown
---
title: Le titre de l'article
category: lab
---

Le texte, en markdown.
```

`title` et `category` suffisent. Tout le reste (`status`, `confidence`, `version`,
`draft`, `authors`, `language`) prend une valeur par défaut, et les dates sont
facultatives. Ajouter les champs plus tard, quand l'article mûrit.

Le gabarit complet à copier est dans [`templates/minimal.md`](templates/minimal.md).

### 2. Modifier un article existant

Chaque page d'article a un lien **Modifier** en haut à droite : il ouvre
directement le fichier dans l'éditeur GitHub. Éditer, commit, c'est publié.

### 3. En local, avec l'assistant

```bash
npm run new:article
```

Pose les questions une par une (type, titre, statut, confiance, tags, notes
brutes) et génère le fichier au bon endroit avec le frontmatter complet.

### Vérifier avant de publier

```bash
npm run validate:content
```

Les champs manquants produisent des **avertissements** (non bloquants) ; seuls
un `category` invalide, un fichier rangé dans le mauvais dossier ou une date
illisible sont des **erreurs**.

## Sections

| Section | Catégorie (`category`) | Dossier |
| --- | --- | --- |
| Frameworks | `framework` | `src/content/docs/frameworks/` |
| Essays | `essay` | `src/content/docs/essays/` |
| Experiments | `experiment` | `src/content/docs/experiments/` |
| Laboratoire | `lab` | `src/content/docs/lab/` |
| Notes | `note` | `src/content/docs/notes/` |

Les gabarits correspondants sont dans `templates/` — `minimal.md` pour démarrer
vite, les autres pour la structure complète de chaque type.

### Frontmatter

| Champ | Obligatoire | Défaut |
| --- | --- | --- |
| `title` | oui | — |
| `category` | oui | — |
| `description` | non (recommandé) | vide |
| `status` | non | `thought` |
| `confidence` | non | `low` |
| `dateCreated` / `dateUpdated` | non | aucune date affichée |
| `version` | non | `0.1.0` |
| `draft` | non | `false` |
| `featured` | non | `false` |
| `tags` | non | `[]` |
| `authors` | non | `["Med"]` |
| `language` | non | `fr` |
| `readingTime` | non | non affiché |

## ⚠️ À configurer avant la mise en ligne

1. **Domaine.** `astro.config.mjs` utilise `SITE` (défaut :
   `https://lostmedoulle.github.io`). Le remplacer par le domaine réel, ou
   builder avec `SITE_URL=https://mon-domaine.ch npm run build`. Cette valeur
   alimente le sitemap, les URLs canoniques et le flux RSS.

2. **Sponsoring.** Le bouton « Soutenir » pointe vers GitHub Sponsors. Pour
   qu'il fonctionne :
   - activer GitHub Sponsors sur le compte (<https://github.com/sponsors>) ;
   - y créer un palier mensuel à **10 CHF** ;
   - le fichier `.github/FUNDING.yml` affichera alors le bouton natif du dépôt.

   Le montant, l'URL, les contreparties et les coûts affichés sont centralisés
   dans `src/config/support.ts` — c'est le seul fichier à modifier pour changer
   l'offre partout (page `/support`, encart de fin d'article, barre latérale).

## Structure

```
src/
  components/
    home/      composants de la page d'accueil et barre latérale
    starlight/ surcharges du layout Starlight (PageFrame, Header, …)
    support/   encart de sponsoring réutilisable
    ui/        primitives (PixelIcon, SectionHeading)
  config/support.ts   configuration du sponsoring
  content/docs/       articles, par catégorie
  layouts/            HomeLayout (pages hors Starlight)
  pages/              index, catégories, about, support, search, rss.xml
  styles/             tokens, styles globaux, surcharges Starlight
```
