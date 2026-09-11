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
useHead({
  title: 'Portfolio',
  meta: [
    { name: 'description', content: 'My Portfolio' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
