<template>
    <UTimeline
        :items="items"
        :default-value="0"
        color="warning"
        class="max-w-3xl"
    >
        <!-- each timeline item content reveals individually on scroll -->
        <template #wrapper="{ item }">
        <AppRevealComponent :delay="getItemDelay(item)">
            <div v-if="item.date" class="text-xs/5 text-dimmed">
            {{ item.date }}
            </div>
            <div v-if="item.title" class="text-sm font-medium text-highlighted">
            {{ item.title }}
            </div>
            <div v-if="item.description" class="text-sm text-muted text-wrap">
            {{ item.description }}
            </div>
        </AppRevealComponent>
        </template>
    </UTimeline>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';

const props = defineProps<{
  items: TimelineItem[]
}>()

const getItemDelay = (item: TimelineItem) => props.items.indexOf(item) * 120

</script>