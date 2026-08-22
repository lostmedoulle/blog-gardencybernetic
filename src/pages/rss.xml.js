import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

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
      pubDate: new Date(doc.data.dateUpdated ?? doc.data.dateCreated),
      link: `/${doc.id}/`,
      categories: [doc.data.category, ...(doc.data.tags ?? [])],
      customData: `<status>${doc.data.status}</status><confidence>${doc.data.confidence}</confidence>`,
    }))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "Med's Cybernetic Garden",
    description:
      "Systèmes, automatisation, connaissance et jugement humain. Hypothèses testées en public, échecs documentés.",
    site: context.site,
    items,
    customData: '<language>fr</language>',
  });
}
