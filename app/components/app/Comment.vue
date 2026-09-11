<template>
  <div
    class="mb-2 block font-mono text-xs text-dimmed"
    :class="uppercase ? 'uppercase tracking-widest' : 'normal-case'"
  >
    <slot />
  </div>
</template>


<script lang="ts" setup>
defineProps<{
  uppercase?: boolean
}>()
</script>