<template>
    <div class="flex items-center gap-2 text-xs text-toned">
        <UIcon name="i-lucide-user-round" class="size-4" />
        <span>{{ formatAuthors(authors) }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    authors?: string[] | null
}>()

const { t } = useI18n()

const formatAuthors = (authors?: string[] | null) => {
    if (!authors?.length)
        return t('home.projects.noAuthor')

    return authors.join(', ')
}
</script>