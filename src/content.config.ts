import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Optionnelles : un fichier déposé à la main via l'interface GitHub ne
        // doit pas casser le build parce qu'il manque une date. Les composants
        // et le flux RSS retombent sur la date disponible, sinon masquent le champ.
        dateCreated: z.coerce.date().optional(),
        dateUpdated: z.coerce.date().optional(),
        version: z.string().default('0.1.0'),
        status: z.enum([
          'thought',
          'hypothesis',
          'testing',
          'validated',
          'limited',
          'refuted',
          'deprecated',
          'superseded'
        ]).default('thought'),
        confidence: z.enum(['low', 'medium', 'high']).default('low'),
        category: z.enum(['framework', 'experiment', 'essay', 'note', 'lab']),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        authors: z.array(z.string()).default(['Med']),
        related: z.array(z.string()).default([]),
        supersedes: z.string().optional(),
        supersededBy: z.string().optional(),
        language: z.enum(['fr', 'en']).default('fr'),
        readingTime: z.number().optional(),
        cover: z.string().optional(),
      }),
    }),
  }),
};
