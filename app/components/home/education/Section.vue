<template>
  <UContainer>
    <AppSectionHeader :title="t('home.education.title')" />
    <HomeEducationTimeline :items="items" />
  </UContainer>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const { t } = useI18n()

const items = computed<TimelineItem[]>(() => [
    {
        date: '2026 - Present',
        title: t('home.education.utbTitle'),
        description: t('home.education.utbDesc'),
        icon: 'i-lucide-graduation-cap',
    },
    {
        date: 'Feb. 2026',
        title: t('home.education.zenitTitle'),
        description: t('home.education.zenitDesc'),
        icon: 'i-lucide-award',
    },
    {
        date: 'Apr. 2025',
        title: t('home.education.siemensTitle'),
        description: t('home.education.siemensDesc'),
        icon: 'i-lucide-award',
    },
    {
        date: '2022 - 2026',
        title: t('home.education.schoolTitle'),
        description: t('home.education.schoolDesc'),
        icon: 'i-lucide-school',
    }
])
</script>