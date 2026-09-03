import { getCollection } from 'astro:content';
import { articleToMarkdown, byRecency } from '../../utils/kb';

export async function GET({ site }: any) {
  const base = import.meta.env.BASE_URL;
  const docs = (await getCollection('docs', ({ data }) => !data.draft)).sort(byRecency);
  const home = site ? new URL(base, site).href : base;

  const header = [
    "# Med's Cybernetic Garden — corpus complet",
    '',
    'Notes publiques et versionnées sur les systèmes, l\'automatisation, la',
    'connaissance et le jugement humain. Chaque texte porte un statut et un',
    'niveau de confiance : ils indiquent le poids à accorder à ce qui est écrit.',
    '',
    '**Statuts** — `thought` : idée brute. `hypothesis` : formulée, falsifiable,',
    'pas encore testée. `testing` : test en cours. `validated` : tenue dans le',
    'contexte décrit, pas universellement. `limited` : tenue dans un domaine plus',
    'étroit que prévu. `refuted` : cassée par une mesure, et publiée quand même.',
    '',
    `Source : ${home}`,
    `Articles : ${docs.length}`,
    `Export : ${new Date().toISOString().slice(0, 10)}`,
    '',
    '---',
    '',
  ].join('\n');

  const body = docs
    .map(entry => articleToMarkdown(entry, site, base))
    .join('\n\n---\n\n');

  return new Response(header + body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
