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
        })
    }
})