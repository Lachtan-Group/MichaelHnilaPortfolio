<template>
  <UContainer>
    <AppSectionHeader title="Education & Awards" />
    <HomeEducationTimeline :items="items" />
  </UContainer>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
    {
        date: '2026 - Present',
        title: 'Tomáš Bata University in Zlín - Faculty of Applied Informatics (UTB FAI)',
        description:
        'Bachelor\'s studies in Applied Informatics. Focus on software engineering, modern web applications (Vue.js, Nuxt, Symfony, Laravel) and self-hosted infrastructure (Docker, Nginx).',
        icon: 'i-lucide-graduation-cap',
    },
    {
        date: 'Feb. 2026',
        title: 'ZENIT in Programming - Regional Round, Category A - 18th Place',
        description: 'In school year 2025/2026 placed 18th in Category A with 91.00 points and recognized as a successful solver at the regional round.',
        icon: 'i-lucide-award',
    },
    {
        date: 'Apr. 2025',
        title: 'Siemens Young Generation Award - ATP Journal Media Partner Award',
        description:
        'Awarded the ATP Journal Media Partner Award for a team project: model of a production press with additional functions, solving non-standard situations',
        icon: 'i-lucide-award',
    },
    {
        date: '2022 - 2026',
        title: 'Technické lýceum - Spojená škola sv. Jána Bosca (SSND), Nová Dubnica',
        description:
        'Technical high school focused on programming, informatics and technical subjects. Foundations in C/C++ and web projects like Zervan Testy Generator (Vue3 + TypeScript) and my maturita project, JapanEase (Japanese verb-conjugation learning app).',
        icon: 'i-lucide-school',
    }
]
</script>