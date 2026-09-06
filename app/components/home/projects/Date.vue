<template>
    <div>
        <span v-if="startDate">{{ formatDate(startDate) }}</span>
        <span v-if="endDate"> - {{ formatDate(endDate) }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    startDate?: string | null
    endDate?: string | null
}>()

const formatDate = (value: string) => {
    const date = new Date(value)

    if (Number.isNaN(date.getTime()))
        return value

    return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date)
}
</script>