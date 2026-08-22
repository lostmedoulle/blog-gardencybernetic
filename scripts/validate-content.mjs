import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_STATUSES = ['thought', 'hypothesis', 'testing', 'validated', 'limited', 'refuted', 'deprecated', 'superseded'];
const ALLOWED_CONFIDENCES = ['low', 'medium', 'high'];
const ALLOWED_CATEGORIES = ['framework', 'experiment', 'essay', 'note', 'lab'];

const CATEGORY_DIR_MAP = {
  framework: 'frameworks',
  experiment: 'experiments',
  essay: 'essays',
  note: 'notes',
  lab: 'lab',
};

function parseFrontmatter(fileContent, filePath) {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const yamlRaw = match[1];
  const data = {};

  const lines = yamlRaw.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let val = trimmed.slice(colonIndex + 1).trim();

    // Clean quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

    // Parse array
    if (val.startsWith('[') && val.endsWith(']')) {
      const items = val
        .slice(1, -1)
        .split(',')
        .map(i => i.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
      data[key] = items;
    } else if (val === 'true') {
      data[key] = true;
    } else if (val === 'false') {
      data[key] = false;
    } else {
      data[key] = val;
    }
  }

  return data;
}

function getAllArticleFiles(dirPath) {
  let results = [];
  if (!fs.existsSync(dirPath)) return results;

  const list = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of list) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllArticleFiles(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      results.push(fullPath);
    }
  }
  return results;
}

function validateSemver(v) {
  return /^\d+\.\d+\.\d+$/.test(v);
}

function main() {
  console.log('🔍 --- Validation du contenu du jardin cybernétique ---\n');

  const docsDir = path.join(process.cwd(), 'src', 'content', 'docs');
  const files = getAllArticleFiles(docsDir);

  let errorCount = 0;
  let warningCount = 0;
  let validCount = 0;

  const errors = [];
  const warnings = [];

  const slugMap = new Map(); // slug -> filePath
  const articlesMap = new Map(); // slug -> data

  // First pass: collection and frontmatter parsing
  for (const filePath of files) {
    const relativePath = path.relative(docsDir, filePath);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const data = parseFrontmatter(fileContent, filePath);
    if (!data) {
      errors.push(`[${relativePath}] Frontmatter manquant ou invalide.`);
      errorCount++;
      continue;
    }

    // Compute slug
    const basename = path.basename(filePath, path.extname(filePath));
    const slug = data.slug || basename;

    if (slugMap.has(slug)) {
      errors.push(`[${relativePath}] Conflit de slug "${slug}" déjà utilisé par ${slugMap.get(slug)}.`);
      errorCount++;
    } else {
      slugMap.set(slug, relativePath);
    }

    articlesMap.set(slug, { filePath, relativePath, data });

    let fileHasErrors = false;

    // Check title & description
    if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
      errors.push(`[${relativePath}] Le champ 'title' est obligatoire et ne doit pas être vide.`);
      fileHasErrors = true;
    }

    if (!data.description || typeof data.description !== 'string' || data.description.trim() === '') {
      errors.push(`[${relativePath}] Le champ 'description' est obligatoire et ne doit pas être vide.`);
      fileHasErrors = true;
    }

    // Check status
    if (!data.status || !ALLOWED_STATUSES.includes(data.status)) {
      errors.push(`[${relativePath}] Statut invalide '${data.status}'. Statuts autorisés : ${ALLOWED_STATUSES.join(', ')}.`);
      fileHasErrors = true;
    }

    // Check confidence
    if (!data.confidence || !ALLOWED_CONFIDENCES.includes(data.confidence)) {
      errors.push(`[${relativePath}] Niveau de confiance invalide '${data.confidence}'. Niveaux autorisés : ${ALLOWED_CONFIDENCES.join(', ')}.`);
      fileHasErrors = true;
    }

    // Check category & folder coherence
    if (!data.category || !ALLOWED_CATEGORIES.includes(data.category)) {
      errors.push(`[${relativePath}] Catégorie invalide '${data.category}'. Catégories autorisées : ${ALLOWED_CATEGORIES.join(', ')}.`);
      fileHasErrors = true;
    } else {
      const expectedFolder = CATEGORY_DIR_MAP[data.category];
      const actualFolder = relativePath.split(path.sep)[0];
      if (actualFolder !== expectedFolder) {
        errors.push(`[${relativePath}] Incohérence dossier/catégorie. Catégorie '${data.category}' devrait être dans le dossier '${expectedFolder}/', mais est dans '${actualFolder}/'.`);
        fileHasErrors = true;
      }
    }

    // Check dates
    const dCreated = new Date(data.dateCreated);
    const dUpdated = new Date(data.dateUpdated);

    if (isNaN(dCreated.getTime())) {
      errors.push(`[${relativePath}] 'dateCreated' invalide ou absente.`);
      fileHasErrors = true;
    }

    if (isNaN(dUpdated.getTime())) {
      errors.push(`[${relativePath}] 'dateUpdated' invalide ou absente.`);
      fileHasErrors = true;
    }

    if (!isNaN(dCreated.getTime()) && !isNaN(dUpdated.getTime())) {
      if (dUpdated < dCreated) {
        errors.push(`[${relativePath}] 'dateUpdated' (${data.dateUpdated}) ne peut pas être antérieure à 'dateCreated' (${data.dateCreated}).`);
        fileHasErrors = true;
      }
    }

    // Check semver version
    if (data.version && !validateSemver(data.version)) {
      warnings.push(`[${relativePath}] La version '${data.version}' n'est pas un SemVer valide (ex: 0.1.0).`);
      warningCount++;
    }

    // Check tags duplicates
    if (Array.isArray(data.tags)) {
      const uniqueTags = new Set(data.tags);
      if (uniqueTags.size !== data.tags.length) {
        warnings.push(`[${relativePath}] Des doublons ont été détectés dans les tags.`);
        warningCount++;
      }
    }

    // Check draft
    if (typeof data.draft !== 'boolean') {
      errors.push(`[${relativePath}] Le champ 'draft' doit être un booléen (true/false).`);
      fileHasErrors = true;
    }

    if (fileHasErrors) {
      errorCount++;
    } else {
      validCount++;
    }
  }

  // Second pass: check related, supersedes, supersededBy references
  for (const [slug, { relativePath, data }] of articlesMap.entries()) {
    if (Array.isArray(data.related)) {
      for (const relSlug of data.related) {
        if (!slugMap.has(relSlug)) {
          warnings.push(`[${relativePath}] Lien 'related' vers un article inexistant "${relSlug}".`);
          warningCount++;
        }
      }
    }

    if (data.supersedes && data.supersededBy) {
      errors.push(`[${relativePath}] Conflit : un article ne peut pas simultanément avoir 'supersedes' et 'supersededBy'.`);
      errorCount++;
    }
  }

  // Print Report
  console.log('📊 --- Rapport de validation ---');
  console.log(`📁 Total d'articles examinés : ${files.length}`);
  console.log(`✅ Articles valides          : ${validCount}`);
  console.log(`⚠️ Warnings                  : ${warningCount}`);
  console.log(`❌ Erreurs                   : ${errorCount}\n`);

  if (warnings.length > 0) {
    console.log('⚠️ AVERTISSEMENTS :');
    warnings.forEach(w => console.log(`   - ${w}`));
    console.log('');
  }

  if (errors.length > 0) {
    console.log('❌ ERREURS BLOQUANTES :');
    errors.forEach(e => console.log(`   - ${e}`));
    console.log('\n❌ La validation a échoué.\n');
    process.exit(1);
  }

  console.log('🎉 Validation réussie sans aucune erreur !\n');
}

main();
