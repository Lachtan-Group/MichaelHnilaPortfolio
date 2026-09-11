<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead(() => ({
  title: t('meta.defaultTitle'),
  meta: [
    { name: 'description', content: t('meta.appDescription') },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
}))
</script>
