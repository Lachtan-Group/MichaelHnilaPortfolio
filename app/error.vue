<template>
    <UContainer class="flex flex-col h-screen items-center justify-center gap-4 py-24 text-center">
        <AppComment :uppercase="true">Error</AppComment>
        <h1 class="text-4xl font-bold">{{ error.status }}</h1>
        <p class="text-lg text-dimmed">{{ error.message }}</p>
        <UButton as="NuxtLink" to="/" variant="solid" size="md">
            Go back home
        </UButton>
    </UContainer>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError
}>()
</script>