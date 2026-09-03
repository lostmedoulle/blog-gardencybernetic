import { getCollection } from 'astro:content';
import { articleUrl, byRecency } from '../utils/kb';

const GROUPS: Array<[string, string]> = [
  ['framework', 'Frameworks'],
  ['experiment', 'Expériences'],
  ['essay', 'Essais'],
  ['lab', 'Laboratoire'],
  ['note', 'Notes'],
];

export async function GET({ site }: any) {
  const base = import.meta.env.BASE_URL;
  const docs = (await getCollection('docs', ({ data }) => !data.draft)).sort(byRecency);
  const abs = (p: string) => (site ? new URL(p, site).href : p);
  const md = (id: string) => abs(`${base.replace(/\/$/, '')}/kb/${id}.md`);

  const out: string[] = [
    "# Med's Cybernetic Garden",
    '',
    "> Notes publiques et versionnées sur les systèmes, l'automatisation et le",
    '> jugement. Chaque texte porte un statut et un niveau de confiance ; les',
    '> hypothèses réfutées restent publiées plutôt que supprimées.',
    '',
    `- [Corpus complet en markdown](${abs(base.replace(/\/$/, '') + '/kb/corpus.md')}) : tous les articles en un seul fichier.`,
    '',
  ];

  for (const [category, label] of GROUPS) {
    const group = docs.filter(d => d.data.category === category);
    if (!group.length) continue;
    out.push(`## ${label}`, '');
    for (const d of group) {
      const meta = `${d.data.status}, confiance ${d.data.confidence}`;
      out.push(`- [${d.data.title}](${md(d.id)}) : ${d.data.description ?? ''} (${meta})`);
    }
    out.push('');
  }

  out.push('## Pages', '');
  out.push(`- [À propos](${abs(base.replace(/\/$/, '') + '/about')}) : la méthode, les statuts, la règle de publication des échecs.`);
  out.push('');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
