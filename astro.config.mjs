import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    starlight({
      title: "Med's Cybernetic Garden",
      social: {
        github: 'https://github.com/Empy-LAM/blog-gardencybernetic',
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
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
      ],
    }),
    react(),
  ],
});