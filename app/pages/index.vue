<template>
    <!-- <div>home page</div> -->

    <!-- <NuxtLink to="/">Go to Portfolio</NuxtLink> -->

  <UMain>
    <HomeHeroSection />

    <div class="flex flex-col gap-16 py-24">
      <HomeAboutMeSection/>
      <HomeEducationSection />
      <HomeSkillsSection />
      <HomeProjectsSection/>
    </div>

  </UMain>
</template>


<script setup lang="ts">
const { t } = useI18n()

useHead(() => ({
  title: t('meta.homeTitle'),
  meta: [
    { name: 'description', content: t('meta.homeDescription') }
  ]
}))

definePageMeta({
  title: 'Home Page',
})
</script>