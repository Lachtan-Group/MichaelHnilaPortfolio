<template>
  <UMain>
    <UPageCard
      variant="subtle"
      class="relative left-1/2 -translate-x-1/2 w-screen rounded-none border-x-0 border-t-0 flex justify-center py-10 md:py-14"
    >
      <UContainer>
        <section class="grid gap-8 lg:grid-cols-[1.15fr_auto] lg:items-center">
          <div class="order-2 lg:order-1">
            <UPageHero>
              <template #title>
                <p class="text-center lg:text-left text-6xl font-bold tracking-tight leading-tight">
                  Hi, I'm Michael Hnila
                </p>
              </template>
              <template #description>
                <p class="mx-auto lg:mx-0 max-w-2xl text-center lg:text-left  text-toned leading-relaxed">
                  I am a highschool student who loves creating pretty web applications. I specialize in Vue, Nuxt, and PHP frameworks, and I love turning ideas into polished digital products.
                </p>
              </template>
            </UPageHero>
          </div>

          <div class="order-1 mx-auto lg:order-2 lg:mx-0 lg:row-span-2 lg:self-center">
            <UAvatar
              src="/me.jpg"
              class="size-52 sm:size-64 lg:size-72 ring-4 ring-primary/20 shadow-2xl"
            />
          </div>

          <div class="order-3 flex flex-wrap justify-center lg:justify-start gap-3 lg:col-start-1">
            <UButton
              to="/projects"
              icon="mdi-folder-multiple-outline"
              size="lg"
            >
              See my work
            </UButton>
            <UButton
              external
              to="https://github.com/MrNotGramatika"
              variant="soft"
              color="neutral"
              icon="mdi-github"
              size="lg"
            >
              GitHub profile
            </UButton>
          </div>
        </section>
      </UContainer>
    </UPageCard>

    <UContainer class="py-10 pt-16 px-0! space-y-10">
      <section class="space-y-4">
        <div class="flex items-center justify-between gap-3 flex-wrap">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">
            Achievements
          </h2>
          <UBadge
            color="primary"
            variant="soft"
            icon="mdi-trending-up"
            size="lg"
          >
            Growing every year
          </UBadge>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <UPageCard
            v-for="achievement in achievements"
            :key="achievement.label"
            variant="subtle"
            class="h-full"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="space-y-3">
                <div class="flex items-center gap-4">
                  <span class="inline-flex size-10 items-center justify-center rounded-lg bg-elevated ring-1 ring-default">
                    <UIcon
                      :name="achievement.icon"
                      class="text-lg text-primary"
                    />
                  </span>
                  <p class="text-xl font-bold leading-none">
                    {{ achievement.value }} {{ achievement.label }}
                  </p>
                </div>
                <p class="text-sm pt-4 text-toned">
                  {{ achievement.description }}
                </p>
              </div>
            </div>
          </UPageCard>
        </div>
      </section>

      <UPageCard variant="subtle">
        <template #header>
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold tracking-tight">
                Featured projects
              </h2>
              <p class="text-toned mt-1">
                A quick look at work I'm proud of.
              </p>
            </div>
            <UButton
              to="/projects"
              variant="ghost"
              icon="mdi-arrow-right"
              trailing
            >
              View all
            </UButton>
          </div>
        </template>

        <div class="grid gap-4 md:grid-cols-3">
          <UPageCard
            v-for="project in featuredProjects"
            :key="project.name"
          >
            <template #header>
              <h3 class="text-lg font-semibold">
                {{ project.name }}
              </h3>
            </template>

            <p class="text-sm text-toned">
              {{ project.description }}
            </p>

            <template #footer>
              <div class="flex items-center justify-between gap-3">
                <UBadge
                  color="neutral"
                  variant="soft"
                >
                  {{ project.stack }}
                </UBadge>
                <UButton
                  :to="project.link"
                  variant="ghost"
                  color="primary"
                  icon="mdi-open-in-new"
                >
                  Open
                </UButton>
              </div>
            </template>
          </UPageCard>
        </div>
      </UPageCard>

      <UPageCard variant="subtle">
        <template #header>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-center">
            Skills & technologies
          </h2>
        </template>

        <div class="flex flex-wrap justify-center gap-3">
          <UBadge
            v-for="(badge, index) in badges"
            :key="index"
            :color="badge.color as any"
            :icon="badge.icon"
            variant="soft"
            size="lg"
          >
            {{ badge.name }}
          </UBadge>
        </div>
      </UPageCard>

      <UPageCard
        variant="subtle"
        class="text-center"
      >
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight">
          Let's build something great!
        </h2>
        <p class="mt-2 text-toned max-w-2xl mx-auto">
          Interested in working together? Check my projects or reach out through GitHub.
        </p>
        <div class="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <UButton
            to="/projects"
            size="lg"
          >
            Explore projects
          </UButton>
          <UButton
            to="https://github.com/MrNotGramatika"
            target="_blank"
            size="lg"
            variant="soft"
            color="neutral"
            icon="mdi-github"
          >
            Contact on GitHub
          </UButton>
        </div>
      </UPageCard>
    </UContainer>
  </UMain>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Michael Hnila - Portfolio',
  description: 'Welcome to my portfolio website! Here you can find information about me, my projects, and how to contact me.',
  ogTitle: 'Michael Hnila - Portfolio',
  ogDescription: 'Welcome to my portfolio website! Here you can find information about me, my projects, and how to contact me.',
  ogImage: '/og-image.png'
})

const badges = [
  { name: 'C & C++', icon: 'mdi-language-cpp', color: 'info' },
  { name: 'Vue.js', icon: 'mdi-vuejs', color: 'success' },
  { name: 'Nuxt.js', icon: 'mdi-nuxt', color: 'success' },
  { name: 'React Native', icon: 'mdi-react', color: 'info' },
  { name: 'Symfony', icon: 'mdi-symfony', color: 'neutral' },
  { name: 'Laravel', icon: 'mdi-laravel', color: 'error' }
]

const achievements = [
  {
    value: '4+',
    label: 'Years coding',
    description: 'Building web applications continuously and improving architecture, design, and performance.',
    period: 'Since 2022',
    icon: 'mdi-timer-outline'
  },
  {
    value: '10+',
    label: 'Production projects',
    description: 'Delivered real-world projects from idea to launch across full-stack and frontend-focused builds.',
    period: 'Shipped',
    icon: 'mdi-briefcase-outline'
  },
  {
    value: '6',
    label: 'Core technologies',
    description: 'Main stack across Vue, Nuxt, React Native, and PHP frameworks used in daily development.',
    period: 'Current',
    icon: 'mdi-code-tags'
  }
]

const featuredProjects = [
  {
    name: 'Portfolio Website',
    description: 'My personal website built with Nuxt and Nuxt UI with a focus on performance and clean design.',
    stack: 'Nuxt 3 + Vue',
    link: '/projects'
  },
  {
    name: 'Mobile App Prototype',
    description: 'Cross-platform app interface and architecture prototype for a product-focused startup idea.',
    stack: 'React Native',
    link: '/projects'
  },
  {
    name: 'Backend API Platform',
    description: 'Modular API backend with authentication and scalable project structure for business use-cases.',
    stack: 'Laravel / Symfony',
    link: '/projects'
  }
]
</script>
