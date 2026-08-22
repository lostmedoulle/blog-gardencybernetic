import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const CATEGORY_MAP = {
  framework: 'frameworks',
  experiment: 'experiments',
  essay: 'essays',
  note: 'notes',
  lab: 'lab',
};

const ALLOWED_TYPES = ['framework', 'experiment', 'essay', 'note', 'lab'];
const ALLOWED_STATUSES = ['thought', 'hypothesis', 'testing', 'validated', 'limited', 'refuted', 'deprecated', 'superseded'];
const ALLOWED_CONFIDENCES = ['low', 'medium', 'high'];

async function main() {
  const rl = readline.createInterface({ input, output });

  console.log('\n🌱 --- Créateur d\'article Med\'s Cybernetic Garden ---\n');

  try {
    // 1. Type
    let type = (await rl.question('1. Type (framework / experiment / essay / note / lab) [framework]: ')).trim().toLowerCase() || 'framework';
    if (!ALLOWED_TYPES.includes(type)) {
      console.error(`❌ Type invalide. Choix autorisés: ${ALLOWED_TYPES.join(', ')}`);
      process.exit(1);
    }

    // 2. Titre
    const title = (await rl.question('2. Titre de l\'article: ')).trim();
    if (!title) {
      console.error('❌ Le titre ne peut pas être vide.');
      process.exit(1);
    }

    // 3. Description
    const description = (await rl.question('3. Description courte: ')).trim() || title;

    // 4. Langue
    let language = (await rl.question('4. Langue (fr / en) [fr]: ')).trim().toLowerCase() || 'fr';
    if (!['fr', 'en'].includes(language)) language = 'fr';

    // 5. Statut
    let status = (await rl.question(`5. Statut (${ALLOWED_STATUSES.join(', ')}) [hypothesis]: `)).trim().toLowerCase() || 'hypothesis';
    if (!ALLOWED_STATUSES.includes(status)) status = 'hypothesis';

    // 6. Confiance
    let confidence = (await rl.question(`6. Confiance (${ALLOWED_CONFIDENCES.join(', ')}) [medium]: `)).trim().toLowerCase() || 'medium';
    if (!ALLOWED_CONFIDENCES.includes(confidence)) confidence = 'medium';

    // 7. Tags
    const tagsInput = await rl.question('7. Tags (séparés par des virgules) [cybernetics, systems]: ');
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    if (tags.length === 0) tags.push('systems');

    // 8. Featured
    const featuredInput = (await rl.question('8. Mis en avant (featured)? (yes / no) [no]: ')).trim().toLowerCase();
    const featured = featuredInput === 'yes' || featuredInput === 'y';

    // 9. Draft
    const draftInput = (await rl.question('9. Brouillon (draft)? (yes / no) [no]: ')).trim().toLowerCase();
    const draft = draftInput === 'yes' || draftInput === 'y';

    // 10. Notes brutes
    const rawNotes = await rl.question('10. Notes brutes (optionnel, appuyer sur Entrée pour passer):\n');

    rl.close();

    // Verification du slug & destination
    const slug = slugify(title);
    const folderName = CATEGORY_MAP[type];
    const targetDir = path.join(process.cwd(), 'src', 'content', 'docs', folderName);
    const targetFilePath = path.join(targetDir, `${slug}.md`);

    if (fs.existsSync(targetFilePath)) {
      console.error(`\n❌ ERREUR: Le fichier existe déjà à l'emplacement:\n   ${targetFilePath}`);
      process.exit(1);
    }

    // Charger le template
    const templatePath = path.join(process.cwd(), 'templates', `${type}.md`);
    let bodyContent = '';
    if (fs.existsSync(templatePath)) {
      bodyContent = fs.readFileSync(templatePath, 'utf-8');
    }

    if (rawNotes.trim()) {
      bodyContent += `\n\n## Notes source\n\n${rawNotes.trim()}\n`;
    }

    const now = new Date().toISOString().split('T')[0];

    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `description: "${description.replace(/"/g, '\\"')}"`,
      `dateCreated: ${now}`,
      `dateUpdated: ${now}`,
      `version: "0.1.0"`,
      `status: ${status}`,
      `confidence: ${confidence}`,
      `category: ${type}`,
      `tags: [${tags.map(t => `"${t}"`).join(', ')}]`,
      `featured: ${featured}`,
      `draft: ${draft}`,
      `authors: ["Med"]`,
      `language: ${language}`,
      '---',
      '',
    ].join('\n');

    const fileContent = frontmatter + bodyContent;

    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(targetFilePath, fileContent, 'utf-8');

    console.log('\n✅ Article créé avec succès !');
    console.log(`📌 Chemin final : ${targetFilePath}`);
    console.log(`👉 Pour ouvrir le fichier : code "${targetFilePath}"\n`);
  } catch (err) {
    console.error('❌ Erreur lors de la création de l\'article :', err);
    rl.close();
    process.exit(1);
  }
}

main();
