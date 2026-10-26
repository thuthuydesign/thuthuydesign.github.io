import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// A gallery item is { image, caption?, size }. Plain image paths from v1 still work.
const galleryItem = z.union([
  z.string().transform((image) => ({ image, caption: "", size: "full" as const })),
  z.object({
    image: z.string(),
    caption: z.string().nullish().transform((c) => c ?? ""),
    size: z.enum(["full", "half"]).nullish().transform((s) => s ?? "full"),
  }),
]);

// One Markdown file per project in src/content/projects.
// The file name becomes the page URL: yoko-onsen.md -> /work/yoko-onsen/
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(""),
    category: z.string().default("Brand Identity"),
    client: z.string().optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    platforms: z.string().optional(),
    cover: z.string(),
    // Case study blocks; each is shown only when filled in.
    highlights: z
      .array(z.object({ value: z.coerce.string(), label: z.coerce.string() }))
      .nullish()
      .transform((v) => v ?? []),
    myRole: z.array(z.string()).nullish().transform((v) => v ?? []),
    challenge: z.string().nullish(),
    approach: z.string().nullish(),
    outcome: z.string().nullish(),
    gallery: z.array(galleryItem).nullish().transform((v) => v ?? []),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
