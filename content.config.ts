import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
    collections: {
        // content: defineCollection({
        //     type: 'page',
        //     source: '**/*.md'
        // }),
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',
            schema: z.object({
                title: property(z.string()),
                description: z.string(),
                date: z.string()
            })
        }),

        project: defineCollection({
            type: 'page',
            source: 'project/*.md',
            schema: z.object({
                title: property(z.string()),
                description: z.string(),
                authors: z.array(z.string()).default(["Michael Hnila"]),
                state: z.enum(['Completed', 'In-Progress', 'Abandoned']),
                startDate: z.string(),
                endDate: z.string().optional(),
                technologies: z.array(
                    z.object({
                        name: z.string(),
                        icon: z.string().optional(),
                    })
                )
            })
        })
    }
})