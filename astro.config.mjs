import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeBaseLinks } from './src/plugins/rehype-base-links.mjs';

// Déploiement par défaut : GitHub Pages, dépôt de projet.
// Le site est donc servi sous https://lostmedoulle.github.io/blog-gardencybernetic/
//
// Pour passer à un domaine propre, builder avec :
//   SITE_URL=https://mon-domaine.ch SITE_BASE=/ npm run build
const SITE = process.env.SITE_URL ?? 'https://lostmedoulle.github.io';
const BASE = process.env.SITE_BASE ?? '/blog-gardencybernetic';

export default defineConfig({
  site: SITE,
  base: BASE,
  markdown: {
    rehypePlugins: [rehypeBaseLinks(BASE)],
  },
  integrations: [
    starlight({
      title: "Med's Cybernetic Garden",
      description:
        "Un système intellectuel personnel : systèmes, automatisation, connaissance et jugement humain. Hypothèses testées en public, échecs documentés.",
      defaultLocale: 'root',
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      social: {
        github: 'https://github.com/lostmedoulle/blog-gardencybernetic',
      },
      components: {
        PageFrame: './src/components/starlight/PageFrame.astro',
        Header: './src/components/starlight/Header.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
        PageSidebar: './src/components/starlight/PageSidebar.astro',
      },
      customCss: [
        './src/styles/tokens.css',
        './src/styles/global.css',
        './src/styles/starlight-custom.css',
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'alternate',
            type: 'application/rss+xml',
            title: "Med's Cybernetic Garden",
            href: new URL(`${BASE}/rss.xml`.replace(/\/+/g, '/'), SITE).href,
          },
        },
      ],
      sidebar: [
        {
          label: 'Frameworks',
          autogenerate: { directory: 'frameworks' },
        },
        {
          label: 'Essais',
          autogenerate: { directory: 'essays' },
        },
        {
          label: 'Expériences',
          autogenerate: { directory: 'experiments' },
        },
        {
          label: 'Laboratoire',
          autogenerate: { directory: 'lab' },
        },
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
      ],
    }),
  ],
});
