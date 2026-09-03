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
| `cover` | non | aucune image |
| `coverAlt` | non | vide (image décorative) |

### Image de couverture

Les articles n'affichent pas d'image par défaut : ils commencent directement
par le texte. Pour en ajouter une à un article précis, déposer le fichier dans
`public/images/` et le déclarer :

```yaml
cover: /images/mon-article.png
coverAlt: Description de ce que montre l'image
```

Laisser `coverAlt` vide si l'image est purement décorative et n'apporte rien
au texte — un lecteur de synthèse vocale la sautera alors, ce qui est le bon
comportement.

## Déploiement

Le site se déploie sur **GitHub Pages** via `.github/workflows/deploy.yml` :
chaque push sur `main` reconstruit et publie. Le workflow lance `npm run build`,
qui déclenche `validate:content` — un frontmatter invalide fait donc échouer le
déploiement **avant** publication, jamais après.

### Activation (une seule fois, par un administrateur du dépôt)

1. **Rendre le dépôt public** — `Settings` → `General` → bas de page →
   `Change repository visibility` → **Public**.
   GitHub Pages sur un dépôt privé exige un plan payant (Pro, Team ou
   Enterprise). Sur un plan gratuit, un dépôt privé ne peut pas publier de site.
2. **Activer Pages** — `Settings` → `Pages` → **Source : GitHub Actions**.
3. **Relancer le workflow** — onglet `Actions` → « Déployer sur GitHub Pages »
   → `Run workflow`. Inutile de refaire un commit.

Le site sera servi sur `https://lostmedoulle.github.io/blog-gardencybernetic/`.

Ces trois étapes ne peuvent pas être automatisées : le `GITHUB_TOKEN` d'Actions
peut déployer vers un site Pages existant, mais ni en créer un, ni changer la
visibilité du dépôt. GitHub réserve ces opérations à un administrateur.

Tant que Pages n'est pas activé, le job `build` réussit (le contenu est validé
et le site compilé à chaque push) et seul le job `deploy` échoue, avec le
message « Ensure GitHub Pages has been enabled ».

### Sous-chemin

Un dépôt de projet GitHub Pages est servi sous un sous-chemin, pas à la racine.
`astro.config.mjs` définit donc `base: '/blog-gardencybernetic'`. Astro préfixe
ses propres routes, mais **pas** les `href` écrits à la main : utiliser
`withBase()` de `src/utils/paths.ts` pour tout lien interne, et `stripBase()`
pour comparer un `Astro.url.pathname` à une route.

```astro
---
import { withBase } from '../utils/paths';
---
<a href={withBase('/lab')}>Laboratoire</a>
```

### Passer à un domaine propre

```bash
SITE_URL=https://mon-domaine.ch SITE_BASE=/ npm run build
```

`withBase()` devient alors transparent, sans autre modification. Ajouter aussi
un fichier `public/CNAME` contenant le domaine.

## Mesure d'audience

Le site est statique et servi par GitHub Pages : il n'y a ni serveur ni journal
d'accès. Compter les visites passe donc nécessairement par un service externe
appelé depuis le navigateur.

**Désactivée par défaut.** Aucun script n'est chargé tant que `provider` vaut
`none` dans `src/config/analytics.mjs`.

### Activer

1. Créer un compte chez l'un des quatre fournisseurs pris en charge.
2. Renseigner `provider` et l'identifiant correspondant dans
   `src/config/analytics.mjs`.
3. Commit : le déploiement s'occupe du reste.

| Fournisseur | Coût | Remarque |
| --- | --- | --- |
| **GoatCounter** | gratuit (usage personnel) | Open source, script de ~3 Ko. Le choix par défaut pour un blog personnel. |
| Cloudflare Web Analytics | gratuit | Demande un compte Cloudflare ; le domaine n'a pas besoin d'y être hébergé. |
| Umami | gratuit (offre limitée) ou auto-hébergé | `umamiScriptUrl` est modifiable pour une instance à soi. |
| Plausible | payant | Le plus abouti côté interface. |

### Événements suivis

Quatre points sont marqués par un attribut `data-track`. Ils ne remontent rien
tant qu'aucun fournisseur n'est configuré.

| Événement | Déclencheur |
| --- | --- |
| `kb-corpus-telechargement` | Bouton de téléchargement du corpus, sur `/kb` |
| `kb-corpus-adresse-copiee` | Bouton de copie de l'adresse du corpus |
| `kb-llms-txt` | Lien vers `llms.txt` |
| `article-markdown` | Lien « Markdown » dans l'en-tête d'un article |

Pour en ajouter un, il suffit de poser `data-track="mon-evenement"` sur
n'importe quel élément cliquable : un écouteur délégué s'en charge, il n'y a
pas de gestionnaire à écrire.

**Ce que ces compteurs mesurent réellement.** Des clics, pas des
téléchargements. Un fichier statique servi par GitHub Pages ne peut pas être
compté côté serveur : une adresse collée directement dans un agent, ou un
`curl`, n'apparaîtra jamais. Le chiffre est un plancher, pas un total.

Les événements se consultent dans le tableau de bord du fournisseur. Les
afficher sur le site demanderait de relire une API avec un jeton, ce qui
n'est pas faisable depuis un site statique sans exposer ce jeton.

### Pourquoi pas Google Analytics

Les quatre options ci-dessus sont sans cookie, sans identifiant persistant et
sans profil individuel : elles comptent des pages vues, pas des personnes.
La page `/support` affirme que le site n'a ni publicité ni cookie, et l'encart
sous chaque article le répète. Un outil qui suivrait les lecteurs d'un site à
l'autre rendrait ces phrases fausses.

Si le fournisseur change, vérifier que ces deux textes restent exacts :
`src/pages/support.astro` et `src/components/support/SupportCTA.astro`.

## ⚠️ Reste à configurer

**Sponsoring.** Le bouton « Soutenir » pointe vers GitHub Sponsors. Pour
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
  utils/              helpers de dates et de chemins (withBase / stripBase)
  content/docs/       articles, par catégorie
  layouts/            HomeLayout (pages hors Starlight)
  pages/              index, catégories, about, support, search, rss.xml
  styles/             tokens, styles globaux, surcharges Starlight
```
