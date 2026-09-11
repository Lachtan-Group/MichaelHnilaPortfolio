<template>
  <span ref="target" class="relative inline-grid max-w-full">
    <span
      aria-hidden="true"
      class="invisible max-w-full overflow-hidden whitespace-normal sm:whitespace-nowrap [grid-area:1/1]"
    >{{ text }}</span>
    <span
      class="inline-flex max-w-full items-center justify-center overflow-hidden whitespace-normal sm:whitespace-nowrap lg:justify-start [grid-area:1/1]"
    >
      <span>{{ typedName }}</span>
      <span
        v-if="showCaret"
        aria-hidden="true"
        :style="caretWidthStyle"
        class="ml-[0.12em] inline-block h-[0.9em] w-0.5 translate-y-[0.03em] rounded-full bg-current align-middle animate-blink sm:w-1"
      />
    </span>
  </span>
</template>


<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    speed?: number
    delay?: number
    hideCaret?: boolean
    caretWidth?: string | number
    hideCaretAfterDone?: boolean
    threshold?: number
    startOnVisible?: boolean
  }>(),
  {
    speed: 80,
    delay: 0,
    hideCaret: false,
    caretWidth: undefined,
    hideCaretAfterDone: false,
    threshold: 0.2,
    startOnVisible: true,
  },
)


const target = ref<HTMLElement | null>(null)
const typedName = ref('')
const done = ref(false)
const started = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

const showCaret = computed(() => !props.hideCaret && !(props.hideCaretAfterDone && done.value))
const caretWidthStyle = computed(() =>
  props.caretWidth == null
    ? undefined
    : { width: typeof props.caretWidth === 'number' ? `${props.caretWidth}px` : props.caretWidth },
)

function typeText() {
  done.value = false
  let i = 0
  const step = () => {
    if (i > props.text.length) return (done.value = true)
    typedName.value = props.text.slice(0, i++)
    timer = setTimeout(step, props.speed + Math.random() * 40) // slight variance so it feels more nice
  }
  step()
}

function start() {
  if (started.value) return
  started.value = true
  timer = setTimeout(typeText, props.delay)
}

onMounted(() => {
  if (!props.startOnVisible) return start()
  const { stop } = useIntersectionObserver(
    target,
    ([entry]) => entry?.isIntersecting && (start(), stop()),
    { threshold: props.threshold },
  )
})

onBeforeUnmount(() => clearTimeout(timer))
</script>