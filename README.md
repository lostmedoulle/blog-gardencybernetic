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

## Sections

| Section | Catégorie (`category`) | Dossier |
| --- | --- | --- |
| Frameworks | `framework` | `src/content/docs/frameworks/` |
| Essays | `essay` | `src/content/docs/essays/` |
| Experiments | `experiment` | `src/content/docs/experiments/` |
| Laboratoire | `lab` | `src/content/docs/lab/` |
| Notes | `note` | `src/content/docs/notes/` |

Les gabarits correspondants sont dans `templates/`.

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
