<template>
    <p>blog index</p>

    <div v-if="blogs">
        <div v-for="blog in blogs" :key="blog.id">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: blogs } = await useAsyncData('blogs', () => 
  queryCollection('blog').all()
)
</script>