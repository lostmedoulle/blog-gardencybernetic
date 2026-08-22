import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// ⚠️ À remplacer par ton domaine réel avant la mise en ligne.
// Peut aussi être surchargé au build : SITE_URL=https://mon-domaine.ch npm run build
const SITE = process.env.SITE_URL ?? 'https://lostmedoulle.github.io';

export default defineConfig({
  site: SITE,
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
            href: `${SITE}/rss.xml`,
          },
        },
      ],
      sidebar: [
        {
          label: 'Frameworks',
          autogenerate: { directory: 'frameworks' },
        },
        {
          label: 'Essays',
          autogenerate: { directory: 'essays' },
        },
        {
          label: 'Experiments',
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
    react(),
  ],
});
