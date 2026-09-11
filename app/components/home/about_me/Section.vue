<template>
  <UContainer class="overflow-x-clip">
    <AppSectionHeader :title="t('home.about.title')" />
    <div class="grid min-w-0 gap-10 overflow-x-clip lg:grid-cols-[1.15fr_.85fr] lg:items-start">
      <div class="min-w-0 max-w-2xl space-y-5">
        <AppRevealComponent :delay="0">
          <p class="text-xl/relaxed font-medium text-highlighted text-balance">
            {{ t('home.about.lead') }}
          </p>
        </AppRevealComponent>

        <AppRevealComponent :delay="80">
          <p class="text-base/relaxed text-toned">
            {{ t('home.about.p1') }}
          </p>
        </AppRevealComponent>

        <AppRevealComponent :delay="160">
          <p class="text-base/relaxed text-toned">
            {{ t('home.about.p2') }}
          </p>
        </AppRevealComponent>

        <AppRevealComponent :delay="220">
          <p class="text-base/relaxed text-toned">
            {{ t('home.about.p3') }}
          </p>
        </AppRevealComponent>
      </div>

      <div class="min-w-0 lg:sticky lg:top-24">
        <HomeAboutMeSideLinks  />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const { t } = useI18n()
</script>