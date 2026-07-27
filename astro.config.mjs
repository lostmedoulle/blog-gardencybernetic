import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    starlight({
      title: "Med's Cybernetic Garden",
      social: {
        github: 'https://github.com',
      },
      customCss: [
        './src/styles/tokens.css',
        './src/styles/global.css',
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
      ],
    }),
    react(),
  ],
});