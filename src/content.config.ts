import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        dateCreated: z.coerce.date().optional(),
        dateUpdated: z.coerce.date().optional(),
        version: z.string().optional(),
        status: z.enum([
          'hypothesis',
          'testing',
          'validated',
          'limited',
          'refuted',
          'deprecated',
          'superseded'
        ]).optional(),
        confidence: z.union([z.string(), z.number()]).optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional().default(false),
        draft: z.boolean().optional().default(false),
        category: z.string().optional(),
        readingTime: z.string().optional()
      }),
    }),
  }),
};
