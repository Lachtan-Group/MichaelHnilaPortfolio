<template>
    <UHeader :title="preferredPageTitle" :toggle="false">
        <UNavigationMenu :items="headerItems" />
        
        <template #right>
            <AppButtonLocale />
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
        label: t('header.home'),
        href: '/',
        icon: 'i-lucide-house'
    },
    {
        label: t('header.projects'),
        href: '/project',
        icon: 'i-lucide-folder-open'
    },
    {
        label: t('header.blogs'),
        href: '/blogs',
        icon: 'i-lucide-notebook-pen'
    },
    
])
const { t } = useI18n()
const route = useRoute()
const preferredPageTitle = computed(() => {
    const pageTitle = route.meta.title as string | undefined
    return pageTitle || t('meta.defaultTitle')
})
</script>