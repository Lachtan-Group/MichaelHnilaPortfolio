<template>
  <div>
    <slot name="title">
      <p class="text-3xl font-bold tracking-tight mb-8"> {{ title }} </p>
    </slot>

  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>