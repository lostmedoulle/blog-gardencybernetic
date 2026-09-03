/**
 * Préfixe par la base du site les liens et sources écrits en chemin absolu
 * dans le markdown (`/essays/mon-article/`).
 *
 * Astro préfixe ses propres routes et les assets qu'il traite, mais pas les
 * chemins écrits à la main dans un article : sous GitHub Pages, où le site est
 * servi depuis /blog-gardencybernetic/, ils pointeraient vers la racine du
 * domaine et renverraient une 404. Le markdown ne peut pas appeler withBase(),
 * d'où ce plugin.
 *
 * Sans effet si le site est servi à la racine d'un domaine.
 */
export function rehypeBaseLinks(base = '/') {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;

  const shouldRewrite = value =>
    typeof value === 'string' &&
    value.startsWith('/') &&
    !value.startsWith('//') &&
    !value.startsWith(`${prefix}/`);

  return () => tree => {
    if (!prefix) return;

    const walk = node => {
      if (node.type === 'element' && node.properties) {
        for (const attr of ['href', 'src']) {
          if (shouldRewrite(node.properties[attr])) {
            node.properties[attr] = prefix + node.properties[attr];
          }
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };

    walk(tree);
  };
}
