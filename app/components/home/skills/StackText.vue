<template>
    <div class="min-w-0 max-w-md lg:sticky lg:top-24">
      <AppRevealComponent :delay="0">
        <p class="text-xl/relaxed font-medium text-highlighted text-balance">
          {{ t('home.skills.stackLead') }}
        </p>
      </AppRevealComponent>
      <AppRevealComponent :delay="80">
        <p class="mt-3 text-base/relaxed text-toned">
          {{ t('home.skills.stackP1') }}
        </p>
      </AppRevealComponent>
      <AppRevealComponent :delay="160">
        <p class="mt-5 text-sm/relaxed text-dimmed">
          {{ t('home.skills.stackP2') }}
        </p>
      </AppRevealComponent>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
</script>

<style>

</style>