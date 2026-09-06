<template>
    <UContainer class="w-full">
        <AppSectionHeader title="Latest Projects" />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <UPageCard
                v-for="project in projects"
                :key="project.id"
                :to="project.path"
                variant="subtle"
                :title="project.title"
                :description="project.description"
                class="group h-full border border-default/60 bg-elevated/35 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
                <div class="space-y-4">
                    <div class="flex items-center justify-between text-xs text-toned">
                        <HomeProjectsState :state="project.state" />
                        <HomeProjectsDate 
                            :start-date="project.startDate" 
                            :end-date="project.endDate" 
                        />
                    </div>

                    
                    <HomeProjectsAuthors :authors="project.authors" />

                    <div class="flex flex-wrap gap-2">
                        <HomeProjectsTechnologyTags :technologies="project.technologies" />
                    </div>
                </div>
            </UPageCard>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', 
    () => queryCollection('project')
        .order('startDate', 'DESC')
        .limit(3)
        .all()
)
</script>