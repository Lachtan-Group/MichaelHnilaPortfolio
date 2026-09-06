<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>No content found</div>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data: home } = await useAsyncData(route.path, () => 
  queryCollection('project').path(route.path).first()
)
</script>