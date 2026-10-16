import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  image: z.string().optional().editor({ input: 'media' }),
  badge: z.string().optional(),
  authors: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
    avatar: z.object({
      src: z.string().editor({ input: 'media' }),
      alt: z.string().optional()
    }).optional(),
    to: z.string().optional(),
    target: z.string().optional()
  })).optional(),
  draft: z.boolean().default(false)
})

export default defineContentConfig({
  collections: {
    blog_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/blog/*.md',
        prefix: '/blog'
      },
      schema: blogSchema
    }),
    blog_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/blog/*.md',
        prefix: '/es/blog'
      },
      schema: blogSchema
    })
  }
})
