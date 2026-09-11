<template>
    {{ t('projectsPage.listPlaceholder') }}
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead(() => ({
  title: t('meta.projectsTitle'),
  meta: [
    { name: 'description', content: t('meta.projectsDescription') }
  ]
}))

definePageMeta({
  title: 'Projects',
})
</script>