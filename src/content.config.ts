import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const projectsCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    order: z.number(),
  }),
})

const educationCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    year: z.number().optional(),
  }),
})

const careerCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/career' }),
  schema: z.object({
    company: z.string(),
    position: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number().optional(),
  }),
})

export const collections = {
  projects: projectsCollection,
  education: educationCollection,
  career: careerCollection,
}
