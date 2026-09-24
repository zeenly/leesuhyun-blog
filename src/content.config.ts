import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';
import { CATEGORIES } from "./consts";

const blog = defineCollection({
  // A post is either `name.md` or `name/index.md` (for posts with images);
  // both get the id `name`. Files and folders starting with "_" (e.g. _template.md) are skipped.
  loader: glob({ pattern: ['[!_]*.{md,mdx}', '[!_]*/index.{md,mdx}'], base: "./src/content/blog" }),
  schema: z.object({
    // Required
    title: z.string(),
    date: z.coerce.date({
      error: 'date가 없거나 날짜 형식이 아닙니다. 예: date: "2026-01-01"',
    }),
    category: z.enum(CATEGORIES),
    // Optional. Without a description, the first paragraph of the post is used.
    description: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  // Same rule as blog: `name.md` or `name/index.md` (for projects with images), both get the id `name`.
  loader: glob({ pattern: ['[!_]*.{md,mdx}', '[!_]*/index.{md,mdx}'], base: "./src/content/projects" }),
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
