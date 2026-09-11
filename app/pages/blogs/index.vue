<template>
    <h1>{{ t('blogs.title') }}</h1>

    <div v-if="blogs">
        <NuxtLink v-for="blog in blogs" :key="blog.id" :to="blog.path" class="flex flex-col gap-4 border">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.description }}</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { data: blogs } = await useAsyncData('blogs', () => 
  queryCollection('blog').all()
)

useHead(() => ({
  title: t('meta.blogsTitle'),
  meta: [
    { name: 'description', content: t('meta.blogsDescription') }
  ]
}))

definePageMeta({
  title: 'Blogs',
})


</script>