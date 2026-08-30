<template>
    <div>home page</div>

    <NuxtLink to="/">Go to Portfolio</NuxtLink>
</template>


<script setup lang="ts">
definePageMeta({
  title: 'Home Page',
  meta: [
    { name: 'description', content: 'This is the home page of my portfolio' }
  ]
})
</script>