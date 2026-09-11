<template>
  <div
    ref="target"
    :style="style"
    class="group/reveal-slide transition-all ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-none"
    :class="[
      revealed ? 'is-visible opacity-100 blur-none' : revealSelf ? 'opacity-0 blur-sm' : '',
      props.class,
    ]"
  >
    <slot :revealed="revealed" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    direction?: 'left' | 'right'
    distance?: number
    delay?: number
    threshold?: number
    duration?: number
    class?: string
    revealSelf?: boolean
  }>(),
  {
    direction: 'left',
    distance: 32,
    delay: 0,
    threshold: 0.2,
    duration: 700,
    class: '',
    revealSelf: true,
  },
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
  { threshold: props.threshold },
)

const style = computed(() => {
  const offset = props.direction === 'left' ? -props.distance : props.distance

  return {
    transitionDelay: `${props.delay}ms`,
    transitionDuration: `${props.duration}ms`,
    transform: !revealed.value && props.revealSelf ? `translateX(${offset}px)` : 'none',
  }
})
</script>
