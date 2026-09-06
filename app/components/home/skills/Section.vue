<template>
  <UContainer>
    <AppSectionHeader title="Skills" />

    <UPageGrid>
      <UPageCard
        v-for="skill in skills"
        :key="skill.name"
        variant="subtle"
      >
        <div class="flex items-center gap-3">
          <UIcon :name="skill.icon" class="size-6 shrink-0" :class="!skill.brand && 'text-highlighted'" :style="skill.brand ? { color: skill.brand } : undefined" />
          <p class="font-semibold">{{ skill.name }} - {{ levelLabel(skill.level) }}</p>
        </div>

        <UProgressGroup :max="6" :items="segmentItems(skill.level)" size="sm" class="mt-4" :ui="{ base: 'gap-1.5 bg-transparent', segment: 'rounded-full overflow-hidden' }" />
      </UPageCard>
    </UPageGrid>
  </UContainer>
</template>

<script lang="ts" setup>
import type { ProgressGroupItem } from '@nuxt/ui'

const LEVEL_LABELS = ['Beginner', 'Basic', 'Intermediate', 'Proficient', 'Advanced', 'Expert'] as const

const skills = [
  { name: 'Symfony', level: 6, icon: 'i-simple-icons-symfony', brand: undefined },
  { name: 'Vue.js', level: 6, icon: 'i-simple-icons-vuedotjs', brand: '#42b883' },
  { name: 'Docker', level: 6, icon: 'i-simple-icons-docker', brand: '#2496ed' },
  { name: 'Docker Compose', level: 6, icon: 'i-simple-icons-docker', brand: '#2496ed' },
  { name: 'Nginx', level: 5, icon: 'i-simple-icons-nginx', brand: '#009639' },
  { name: 'Nuxt', level: 4, icon: 'i-simple-icons-nuxtdotjs', brand: '#00dc82' },
  { name: 'Laravel', level: 3, icon: 'i-simple-icons-laravel', brand: '#ff2d20' },
]

const levelLabel = (level: number) => LEVEL_LABELS[level - 1] ?? 'Unknown'

const segmentItems = (level: number): ProgressGroupItem[] =>
  Array.from({ length: 6 }, (_, i) => ({
    value: 1,
    color: i < level ? 'primary' : undefined,
    ui: i < level ? undefined : { indicator: 'bg-accented' }
  }))
</script>