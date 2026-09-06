<template>
  <UPageHero :ui="{ container: 'py-12 sm:py-24 lg:py-40' }">
    <template #title>
      <p class="w-full max-w-full text-center lg:text-left text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-balance wrap-break-word">
        <AppTypewriter text="Hi, I'm Michael Hnila" :speed="25" caret-width="4px" />
      </p>
    </template>
    <template #description>
      <p class="w-full mx-auto lg:mx-0 max-w-2xl text-center lg:text-left text-lg sm:text-xl/8 text-toned leading-relaxed text-balance">
        <AppRevealText :delay="50" text="I build polished web applications with Vue.js, Nuxt.js, and PHP frameworks. I'm a university student focused on creating clean, practical products." :speed="10" />
      </p>
    </template>
  </UPageHero>
</template>

<script lang="ts" setup>
</script>