import fs from 'node:fs';
import path from 'node:path';

function parseFrontmatter(fileContent) {
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

    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

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

function main() {
  console.log('⚡ --- Génération de l\'index JSON pour RAG ---');

  const isProd = process.env.NODE_ENV === 'production';
  const docsDir = path.join(process.cwd(), 'src', 'content', 'docs');
  const files = getAllArticleFiles(docsDir);

  const index = [];

  for (const filePath of files) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = parseFrontmatter(fileContent);

    if (!data) continue;

    if (isProd && data.draft) {
      console.log(`⏩ Exclusion du brouillon (prod) : ${data.title}`);
      continue;
    }

    const basename = path.basename(filePath, path.extname(filePath));
    const slug = data.slug || basename;
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');

    index.push({
      title: data.title || '',
      description: data.description || '',
      slug: slug,
      category: data.category || 'note',
      status: data.status || 'thought',
      confidence: data.confidence || 'medium',
      version: data.version || '0.1.0',
      tags: Array.isArray(data.tags) ? data.tags : [],
      dateCreated: data.dateCreated || null,
      dateUpdated: data.dateUpdated || null,
      related: Array.isArray(data.related) ? data.related : [],
      supersedes: data.supersedes || null,
      supersededBy: data.supersededBy || null,
      language: data.language || 'fr',
      draft: Boolean(data.draft),
      sourcePath: relativePath,
    });
  }

  const outputDir = path.join(process.cwd(), 'public', 'generated');
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, 'content-index.json');
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2), 'utf-8');

  console.log(`✅ Index généré avec succès (${index.length} articles) : ${outputPath}\n`);
}

main();
