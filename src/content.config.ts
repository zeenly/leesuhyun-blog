import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Top-level entries starting with "_" (e.g. _template) are excluded from the build.
  loader: glob({ pattern: ['[!_]*.{md,mdx}', '[!_]*/**/*.{md,mdx}'], base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: ['[!_]*.{md,mdx}', '[!_]*/**/*.{md,mdx}'], base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, projects };
