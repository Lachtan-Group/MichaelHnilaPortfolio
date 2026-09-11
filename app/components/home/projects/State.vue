<template>
    <span class="font-medium" :class="stateClass">{{ state ?? t('home.projects.fallbackState') }}</span>
</template>

<script setup lang="ts">
import type { ProjectCollectionItem } from '@nuxt/content'

type ProjectState = ProjectCollectionItem['state']

const props = defineProps<{
    state?: ProjectState | null
}>()

const stateClass = computed(() => {
    switch (props.state) {
        case 'Completed':
            return 'text-green-700 dark:text-success'
        case 'In-Progress':
            return 'text-amber-700 dark:text-warning'
        case 'Abandoned':
            return 'text-red-700 dark:text-error'

        default:
            return 'text-neutral-500 dark:text-neutral-400'
    }
})


</script>
