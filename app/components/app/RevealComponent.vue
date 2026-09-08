<template>
  <div
    ref="target"
    :style="{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }"
    class="group/reveal transition-all ease-out will-change-transform motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none"
    :class="[
      revealSelf
        ? (revealed ? 'is-visible translate-y-0 opacity-100 blur-none' : 'translate-y-6 opacity-0 blur-sm')
        : (revealed ? 'is-visible' : ''),
      props.class
    ]"
  >
    <slot :revealed="revealed" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    delay?: number
    threshold?: number
    duration?: number
    class?: string
    revealSelf?: boolean
  }>(),
  {
    delay: 0,
    threshold: 0.2,
    duration: 700,
    class: '',
    revealSelf: true
  }
)

const target = ref<HTMLElement | null>(null)
const revealed = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    if (entry?.isIntersecting) {
      revealed.value = true
      stop()
    }
  },
  { threshold: props.threshold }
)
</script>
