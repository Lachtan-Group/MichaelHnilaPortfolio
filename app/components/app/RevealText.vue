<template>
  <span
    ref="el"
    class="inline-flex flex-wrap justify-center gap-x-[0.28em] lg:justify-start"
    dir="ltr"
  >
    <span
      v-for="(word, i) in words"
      :key="i"
      class="inline-block transition-all duration-700 ease-out"
      :class="revealed
        ? 'opacity-100 translate-y-0 blur-0'
        : 'opacity-0 translate-y-4 blur-sm'"
      :style="{ transitionDelay: `${i * delay}ms` }"
    >{{ word }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  delay: { type: Number, default: 80 },
  threshold: { type: Number, default: 0.2 },
})

const el = ref(null)
const words = computed(() => props.text.split(' '))
const revealed = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      revealed.value = true
      observer.disconnect()
    }
  }, { threshold: props.threshold })

  observer.observe(el.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>