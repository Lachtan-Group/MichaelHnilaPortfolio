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
        href: '/'
    },
    {
        label: 'Projects',
        href: '/project'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    
])

const route = useRoute()
const preferredPageTitle = computed(() => {
    const pageTitle = route.meta.title as string | undefined
    return pageTitle || 'Portfolio'
})
</script>