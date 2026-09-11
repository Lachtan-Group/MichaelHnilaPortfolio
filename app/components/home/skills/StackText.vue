<template>
    <div class="min-w-0 max-w-md lg:sticky lg:top-24">
      <AppRevealComponent :delay="0">
        <p class="text-xl/relaxed font-medium text-highlighted text-balance">
          A short stack I know well.
        </p>
      </AppRevealComponent>
      <AppRevealComponent :delay="80">
        <p class="mt-3 text-base/relaxed text-toned">
          Vue on the frontend, Symfony on the backend, Docker holding it
          together. I'd rather know a few tools properly than list twenty
          I touched once.
        </p>
      </AppRevealComponent>
      <AppRevealComponent :delay="160">
        <p class="mt-5 text-sm/relaxed text-dimmed">
          Elsewhere in the toolbox: Git, Linux (running Linux Mint daily), 
          TypeScript, TailwindCSS, SQLite (and also C/C++ from school and Discord bot work).
        </p>
      </AppRevealComponent>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>