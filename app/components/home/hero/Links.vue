<template>
  <div>
    <UButton
      to="/project"
      icon="i-mdi-folder-multiple-outline"
      size="lg"
    >
      {{ t('home.hero.work') }}
    </UButton>
    <UButton
      external
      to="https://github.com/MrNotGramatika"
      color="neutral"
      icon="i-mdi-github"
      size="lg"
    >
      {{ t('home.hero.github') }}
    </UButton>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
</script>

<style>

</style>