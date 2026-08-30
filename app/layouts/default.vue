<template>
    <UHeader title="Portfolio">
        <UNavigationMenu :items="headerItems" />
        
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>  

    <slot />

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


</script>