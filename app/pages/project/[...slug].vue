<template>
  <UContainer>
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>{{ t('projectsPage.notFound') }}</div>
  </UContainer>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const route = useRoute()

const { data: home } = await useAsyncData(route.path, () => 
  queryCollection('project').path(route.path).first()
)
</script>