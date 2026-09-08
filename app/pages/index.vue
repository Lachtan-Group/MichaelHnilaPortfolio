<template>
    <!-- <div>home page</div> -->

    <!-- <NuxtLink to="/">Go to Portfolio</NuxtLink> -->

  <UMain>
    <HomeHeroSection />

    <div class="flex flex-col gap-16">
      <HomeAboutMeSection class="pt-24"/>
      <HomeEducationSection />
      <HomeSkillsSection />
      <HomeProjectsSection/>
    </div>

  </UMain>
</template>


<script setup lang="ts">
definePageMeta({
  title: 'Home Page',
  meta: [
    { name: 'description', content: 'This is the home page of my portfolio' }
  ]
})
</script>