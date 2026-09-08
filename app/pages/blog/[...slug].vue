<template>
  <UContainer v-if="page" class="py-8">
    <UButton to="/blog" icon="i-lucide-arrow-left" color="neutral" variant="ghost" size="sm" class="mb-6">
      Back to blog
    </UButton>

    <UPage>
      <UPageHeader :title="page.title" :description="page.description" class="border-b border-default pb-8" />

      <UPageBody class="prose prose-neutral dark:prose-invert max-w-none">
        <ContentRenderer :value="page" />
      </UPageBody>

      <template v-if="tocLinks.length" #left>
        <UPageAside class="py-8">
          <UContentToc title="On this page" :links="tocLinks" highlight highlight-color="primary" />
        </UPageAside>
      </template>
    </UPage>
  </UContainer>

  <UContainer v-else>
    <p>No content found</p>
  </UContainer>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)

// `body.toc.links` is already in the shape `UContentToc` expects
// ({ id, text, depth, children }), so no manual mapping is needed.
const tocLinks = computed(() => page.value?.body?.toc?.links ?? [])
</script>