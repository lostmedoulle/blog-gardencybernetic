/**
 * Sur GitHub Pages, un dépôt de projet est servi sous un sous-chemin
 * (`/blog-gardencybernetic/`), pas à la racine du domaine. Astro préfixe
 * automatiquement ses propres routes, mais pas les `href` écrits à la main :
 * sans ces helpers, chaque lien du site pointerait une page inexistante.
 *
 * `BASE_URL` vaut '/' quand `base` n'est pas défini — les helpers sont donc
 * transparents si le site passe un jour sur un domaine propre.
 */

const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

/** Préfixe un chemin interne par la base du site. Laisse les URL absolues intactes. */
export function withBase(path: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) return path;
  if (path.startsWith('#')) return path;
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${suffix}`;
}

/**
 * Retire la base d'un pathname pour comparer des routes.
 * `Astro.url.pathname` inclut la base : sans cela, tous les tests
 * « est-ce que je suis sur /lab ? » échoueraient en production.
 */
export function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    const rest = pathname.slice(BASE.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname;
}
