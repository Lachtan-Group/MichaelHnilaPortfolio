<template>
  <UPageHero :ui="{ container: 'py-12 sm:py-24 lg:py-40' }">
    <template #title>
      <p class="w-full max-w-full text-center lg:text-left text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-balance wrap-break-word">
        <AppTypewriter :text="t('home.hero.title')" :speed="25" />
      </p>
    </template>
    <template #description>
      <p class="w-full mx-auto lg:mx-0 max-w-2xl text-center lg:text-left text-lg sm:text-xl/8 text-toned leading-relaxed text-balance">
        <AppRevealText :delay="50" :text="t('home.hero.description')" :speed="10" />
      </p>
    </template>
  </UPageHero>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>