<template>
  <div>
    <UHeader title="Portfolio">
      <template #right>
        <u-navigation-menu :items="items" />
        <u-color-mode-switch />
      </template>
    </UHeader>

    <UApp class="h-screen">
      <UContainer>
        <slot />
      </UContainer>
    </UApp>

    <UFooter>
      <USeparator />
      <p>test</p>
    </UFooter>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { icon: 'mdi-github', href: 'https://github.com/MrNotGramatika', external: true }
]
</script>

<style>

</style>
