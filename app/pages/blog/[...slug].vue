<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>No content found</div>
</template>

<script lang="ts" setup>
const { data: home } = await useAsyncData('blog', () => 
  queryCollection('blog').path('/').first()
)
</script>