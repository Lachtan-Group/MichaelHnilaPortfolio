<template>
    <UContainer class="w-full">
        <!-- <p class="text-3xl font-bold tracking-tight">Latest projects</p> -->
        <AppSectionHeader title="Latest Projects" />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <UPageCard
                v-for="project in projects"
                :key="project.id"
                :to="project.path"
                variant="subtle"
                class="group h-full border border-default/60 bg-elevated/25 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                :title="project.title"
                :description="project.description"
            >
                <div class="space-y-4">
                    <div class="flex items-center justify-between text-xs text-toned">
                        <span class="font-medium">{{ project.state ?? 'In progress' }}</span>
                        <div>
                        
                            <span v-if="project.startDate">{{ formatDate(project.startDate) }}</span>
                            <span v-if="project.endDate"> - {{ formatDate(project.endDate) }}</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 text-xs text-toned">
                        <UIcon name="i-lucide-user-round" class="size-4" />
                        <span>{{ formatAuthors(project.authors) }}</span>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <UButton
                            v-for="(technology, index) in (project.technologies ?? []).filter(hasTechnologyContent)"
                            :key="`${technology?.name || technology?.icon || 'tech'}-${index}`"
                            size="xs"
                            variant="subtle"
                            :icon="technology?.icon"
                            class="rounded-full"
                            color="neutral"
                        >
                            {{ technology?.name || '' }}
                        </UButton>
                    </div>
                </div>
            </UPageCard>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => queryCollection('project').order('startDate', 'DESC').limit(3).all())

const formatDate = (value: string) => {
    const date = new Date(value)

    if (Number.isNaN(date.getTime())) {
        return value
    }

    return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date)
}

const hasTechnologyContent = (technology: { name?: string; icon?: string } | null | undefined) => {
    return Boolean(technology?.name || technology?.icon)
}

const formatAuthors = (authors: string[] | null | undefined) => {
    if (!authors?.length) {
        return 'Author not specified'
    }

    return authors.join(', ')
}
</script>