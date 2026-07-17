<template>
  <div>
    <UPageCard
      v-for="project in projects"
      :key="project.name"
    >
      <template #header>
        <h2 class="text-2xl font-bold">
          {{ project.name }}
        </h2>
      </template>
      <p>This is a simple project card.</p>
    </UPageCard>
  </div>
</template>

<script lang="ts" setup>
const projects = [
  {
    name: 'Project 1',
    description: 'This is a simple project card.',
    link: 'https://example.com'
  },
  {
    name: 'Project 2',
    description: 'This is a simple project card.',
    link: 'https://example.com'
  },
  {
    name: 'Project 3',
    description: 'This is a simple project card.',
    link: 'https://example.com'
  }
]
</script>

<style>

</style>
