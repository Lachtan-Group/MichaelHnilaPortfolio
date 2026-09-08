<template>
  <UContainer class="py-8">
    <UPage v-if="page">
      <UPageHeader :title="page.title" :description="page.description" />

      <UPageBody>
        <ContentRenderer :value="page" />
      </UPageBody>

      <template #left>
        <UContentToc title="On this page" :links="tocLinks" highlight highlight-color="primary" class="pl-0!">
          <template #top>
            <UButton
              to="/blog"
              color="neutral"
              variant="outline"
              label="Back to blog"
              icon="i-lucide-arrow-left"
              class="mb-4 justify-start max-lg:hidden"
            />
          </template>
        </UContentToc>
      </template>
    </UPage>

    <p v-else>
      No content found
    </p>
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