/**
 * Export markdown des articles, destiné à servir de base de connaissances
 * à un modèle de langage.
 *
 * Deux transformations sont nécessaires pour que le texte reste exploitable
 * hors du site :
 *
 * - Les liens internes sont écrits en chemin relatif au site (`/essays/…`).
 *   Hors contexte, ils ne pointent nulle part : ils sont réécrits en URL
 *   absolues.
 * - Les images sont des schémas SVG qu'un modèle ne peut pas lire. Leur texte
 *   alternatif, lui, décrit le contenu du schéma. On remplace donc l'image par
 *   sa description, plutôt que de laisser un lien mort.
 */

const CATEGORY_LABEL: Record<string, string> = {
  framework: 'Framework',
  experiment: 'Expérience',
  essay: 'Essai',
  note: 'Note',
  lab: 'Laboratoire',
};

export function articleUrl(id: string, site: URL | undefined, base: string): string {
  const path = `${base.replace(/\/$/, '')}/${id}/`;
  return site ? new URL(path, site).href : path;
}

function rewriteBody(body: string, site: URL | undefined, base: string): string {
  const origin = site ? site.origin : '';
  const prefix = base.replace(/\/$/, '');

  return body
    // Images : conserver la description, écarter le lien inexploitable.
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, (_m, alt) =>
      alt ? `> **Schéma décrit :** ${alt}` : '')
    // Liens internes en chemin absolu.
    .replace(/\]\((\/[^)]*)\)/g, (_m, path) =>
      path.startsWith(prefix + '/') ? `](${origin}${path})` : `](${origin}${prefix}${path})`)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Un article complet, en-tête de métadonnées compris. */
export function articleToMarkdown(entry: any, site: URL | undefined, base: string): string {
  const d = entry.data;
  const lines: string[] = [];

  lines.push(`# ${d.title}`);
  lines.push('');
  if (d.description) lines.push(`_${d.description}_`);
  lines.push('');
  lines.push('| | |');
  lines.push('| --- | --- |');
  lines.push(`| Catégorie | ${CATEGORY_LABEL[d.category] ?? d.category} |`);
  lines.push(`| Statut | ${d.status} |`);
  lines.push(`| Confiance | ${d.confidence} |`);
  if (d.dateUpdated ?? d.dateCreated) {
    const date = new Date(d.dateUpdated ?? d.dateCreated).toISOString().slice(0, 10);
    lines.push(`| Dernière révision | ${date} |`);
  }
  if (d.tags?.length) lines.push(`| Mots-clés | ${d.tags.join(', ')} |`);
  lines.push(`| Source | ${articleUrl(entry.id, site, base)} |`);
  lines.push('');

  if (d.summary?.length) {
    lines.push('## En bref');
    lines.push('');
    for (const point of d.summary) lines.push(`- ${point}`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push(rewriteBody(entry.body ?? '', site, base));
  lines.push('');

  return lines.join('\n');
}

/** Tri stable : du plus récemment révisé au plus ancien. */
export function byRecency(a: any, b: any): number {
  const t = (e: any) => new Date(e.data.dateUpdated ?? e.data.dateCreated ?? 0).getTime();
  return t(b) - t(a);
}
