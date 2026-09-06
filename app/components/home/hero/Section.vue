<template>
    <UPageCard
      variant="subtle"
      class="py-10 rounded-b-none"    
    >
      <UContainer>
        <section class="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-center">
          <HomeHeroText class="order-2 lg:order-1" />
          <HomeHeroAvatar class="order-1 flex justify-center"/>
          <HomeHeroLinks class="order-3 flex max-lg:mx-auto gap-4"/>            
        </section>
      </UContainer>
    </UPageCard>
</template>


<script setup lang="ts">
</script>