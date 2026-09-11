<template>
    <h1>Blogs</h1>

    <div v-if="blogs">
        <NuxtLink v-for="blog in blogs" :key="blog.id" :to="blog.path" class="flex flex-col gap-4 border">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.description }}</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { data: blogs } = await useAsyncData('blogs', () => 
  queryCollection('blog').all()
)

definePageMeta({
  title: 'Blogs',
  meta: [
    { name: 'description', content: 'This is the blogs page of my portfolio' }
  ]
})


</script>