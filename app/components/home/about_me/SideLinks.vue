<template>
  <div class="overflow-x-clip">
    <AppTypewriter text="// if you're curious" :speed="40" hide-caret-after-done caret-width="1px"  class="text-xs font-mono uppercase tracking-widest text-dimmed mb-2" />
    <AppRevealSlide :delay="200">
      <p class="text-sm/relaxed text-muted mb-5">
        Here's where the fun stuff lives:
      </p>
    </AppRevealSlide>

    <nav class="divide-y divide-accented border-y border-accented">
      <AppRevealSlide :delay="380" direction="right">
        <NuxtLink to="/blogs" class="group flex items-center gap-4 py-4">
          <UIcon name="i-lucide-notebook-pen" class="size-5 shrink-0 text-dimmed transition-colors group-hover:text-primary" />
          <span class="flex-1">
            <span class="block text-sm font-medium text-highlighted">Read my longer thoughts</span>
            <span class="block text-sm text-dimmed">stuff too long for a commit message</span>
          </span>
          <UIcon name="i-lucide-arrow-right" class="size-4 shrink-0 text-dimmed transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </NuxtLink>
      </AppRevealSlide>

      <AppRevealSlide :delay="260" direction="right">
        <NuxtLink to="/project" class="group flex items-center gap-4 py-4">
          <UIcon name="i-lucide-folder-open" class="size-5 shrink-0 text-dimmed transition-colors group-hover:text-primary" />
          <span class="flex-1">
            <span class="block text-sm font-medium text-highlighted">Dig through my projects</span>
            <span class="block text-sm text-dimmed">history and development on my previous projects</span>
          </span>
          <UIcon name="i-lucide-arrow-right" class="size-4 shrink-0 text-dimmed transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </NuxtLink>
      </AppRevealSlide>

      <AppRevealSlide :delay="320" direction="right">
        <NuxtLink to="https://github.com/MrNotGramatika" target="_blank" external class="group flex items-center gap-4 py-4">
          <UIcon name="i-simple-icons-github" class="size-5 shrink-0 text-dimmed transition-colors group-hover:text-primary" />
          <span class="flex-1">
            <span class="block text-sm font-medium text-highlighted">Follow my GitHub</span>
            <span class="block text-sm text-dimmed">raw history, expect experiments</span>
          </span>
          <UIcon name="i-lucide-arrow-up-right" class="size-4 shrink-0 text-dimmed transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </NuxtLink>
      </AppRevealSlide>
    </nav>
  </div>
</template>
