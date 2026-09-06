<template>
    <UButton
        v-for="(technology, index) in (technologies ?? []).filter(hasTechnologyContent)"
        :key="`${technology?.name || technology?.icon || 'tech'}-${index}`"
        size="xs"
        variant="subtle"
        :icon="technology?.icon"
        class="rounded-full"
        color="neutral"
    >
        {{ technology?.name || '' }}
    </UButton>
</template>

<script setup lang="ts">
import type { ProjectCollectionItem } from '@nuxt/content'

type Technology = ProjectCollectionItem['technologies'][number]

defineProps<{
    technologies?: ProjectCollectionItem['technologies'] | null
}>()

const hasTechnologyContent = (technology?: Technology | null) => {
    return Boolean(technology?.name || technology?.icon)
}
</script>