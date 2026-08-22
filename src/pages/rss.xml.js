import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { articleDate } from '../utils/dates';
import { withBase } from '../utils/paths';

const CATEGORY_PATH = {
  framework: 'frameworks',
  experiment: 'experiments',
  essay: 'essays',
  note: 'notes',
  lab: 'lab',
};

export async function GET(context) {
  const docs = await getCollection('docs', ({ data }) => !data.draft);

  const items = docs
    .map(doc => ({
      title: doc.data.title,
      description: doc.data.description ?? '',
      pubDate: articleDate(doc.data),
      link: withBase(`/${doc.id}/`),
      categories: [doc.data.category, ...(doc.data.tags ?? [])],
      customData: `<status>${doc.data.status}</status><confidence>${doc.data.confidence}</confidence>`,
    }))
    .sort((a, b) => (b.pubDate?.getTime() ?? 0) - (a.pubDate?.getTime() ?? 0))
    // `@astrojs/rss` refuse une pubDate invalide : on omet le champ plutôt que
    // d'émettre une date bidon pour un article qui n'en porte pas.
    .map(({ pubDate, ...rest }) => (pubDate ? { ...rest, pubDate } : rest));

  return rss({
    title: "Med's Cybernetic Garden",
    description:
      "Systèmes, automatisation, connaissance et jugement humain. Hypothèses testées en public, échecs documentés.",
    // Le lien du canal doit pointer l'accueil réel du site, base comprise.
    site: new URL(withBase('/'), context.site),
    items,
    customData: '<language>fr</language>',
  });
}
