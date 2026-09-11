<template>
    <UHeader :title="preferredPageTitle" :toggle="false">
        <UNavigationMenu :items="headerItems" />
        
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>  

    <UMain>
        <slot />
    </UMain>

</template> 

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const headerItems = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        href: '/',
        icon: 'i-lucide-house'
    },
    {
        label: 'Projects',
        href: '/project',
        icon: 'i-lucide-folder-open'
    },
    {
        label: 'Blogs',
        href: '/blogs',
        icon: 'i-lucide-notebook-pen'
    },
    
])

const route = useRoute()
const preferredPageTitle = computed(() => {
    const pageTitle = route.meta.title as string | undefined
    return pageTitle || 'Portfolio'
})
</script>