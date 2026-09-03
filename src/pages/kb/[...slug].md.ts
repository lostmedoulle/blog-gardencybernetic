import { getCollection } from 'astro:content';
import { articleToMarkdown } from '../../utils/kb';

export async function getStaticPaths() {
  const docs = await getCollection('docs', ({ data }) => !data.draft);
  return docs.map(entry => ({ params: { slug: entry.id }, props: { entry } }));
}

export async function GET({ props, site }: any) {
  const base = import.meta.env.BASE_URL;
  return new Response(articleToMarkdown(props.entry, site, base), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
