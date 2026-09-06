<template>
  <span class="relative inline-grid max-w-full">
    <span aria-hidden="true" class="invisible max-w-full overflow-hidden whitespace-normal sm:whitespace-nowrap [grid-area:1/1]">{{ text }}</span>
    <span class="inline-flex max-w-full items-center justify-center overflow-hidden whitespace-normal sm:whitespace-nowrap lg:justify-start [grid-area:1/1]">
      <span>{{ typedName }}</span>
      <span
        v-if="!hideCaret"
        aria-hidden="true"
        :style="{ '--caret-width': caretWidthValue }"
        class="ml-[0.12em] inline-block h-[0.9em] w-(--caret-width,4px) translate-y-[0.03em] rounded-full bg-current align-middle animate-blink"
      />
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  text: string
  speed?: number
  delay?: number
  caretWidth?: string | number 
  hideCaret?: boolean
}>()

const caretWidthValue = computed(() => {
  if (props.caretWidth === undefined) 
    return '4px'

  return typeof props.caretWidth === 'number' ? `${props.caretWidth}px` : props.caretWidth
})

onMounted(() => {
    if (props.delay) {
        timer = setTimeout(() => typeText(props.text, props.speed), props.delay)
    } else {
        typeText(props.text, props.speed)
    }
})



const typedName = ref('')
let timer: ReturnType<typeof setTimeout> | undefined
function typeText(text: string, speed = 80) {
  let i = 0
  function step() {
    if (i <= text.length) {
      typedName.value = text.slice(0, i)
      i++
      timer = setTimeout(step, speed + Math.random() * 40) // slight variance so it feels more nice
    }
  }
  step()
}

onBeforeUnmount(() => clearTimeout(timer))
</script>