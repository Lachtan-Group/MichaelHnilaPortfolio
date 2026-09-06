<template>
    <p :class="!noPadding ? 'pb-6' : ''">
        <slot />
    </p>
</template>

<script setup lang="ts">
defineProps<{
    noPadding?: boolean
}>()
</script>