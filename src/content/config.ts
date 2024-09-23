import { defineCollection, z } from "astro:content"

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      tags: z.array(z.string()),
      idImage: z.string(),
      image: z.string(),
      altImage: z.string(),
      url: z.string(),
    })
  })
}
