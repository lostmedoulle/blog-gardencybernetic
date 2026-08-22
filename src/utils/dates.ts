/**
 * `dateCreated` et `dateUpdated` sont optionnels dans le schéma : un article
 * déposé à la main peut n'en porter aucune. Ces helpers évitent que cela
 * produise des « Invalid Date » ou des dates codées en dur dans l'affichage.
 */

type Frontmatter = {
  dateUpdated?: Date | string;
  dateCreated?: Date | string;
};

/** Date de référence d'un article, ou `undefined` si aucune n'est renseignée. */
export function articleDate(data: Frontmatter): Date | undefined {
  const raw = data.dateUpdated ?? data.dateCreated;
  if (!raw) return undefined;
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

/** Horodatage pour le tri. Les articles sans date passent en dernier. */
export function sortTimestamp(data: Frontmatter): number {
  return articleDate(data)?.getTime() ?? 0;
}

/** Date formatée en français, ou chaîne vide si la date est absente. */
export function formatDate(value: Date | string | undefined): string {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}
