<template>
  <UContainer class="overflow-x-clip">
    <AppSectionHeader title="Skills" />

    <div class="grid min-w-0 gap-10 overflow-x-clip lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <HomeSkillsStackText />

      <div class="min-w-0">
        <AppComment uppercase>
          <AppTypewriter
            text="// what I reach for"
            :speed="40"
            hide-caret-after-done
            caret-width="1px"
          />
        </AppComment>

        <nav class="divide-y divide-accented border-y border-accented">
          <AppRevealSlide
            v-for="(skill, idx) in skills"
            :key="skill.name"
            :delay="idx * 70"
            direction="right"
          >
            <HomeSkillsSkill :skill="skill" :idx="idx" />
          </AppRevealSlide>
        </nav>

        <AppComment> 
          <AppTypewriter text="<!-- Expert means it's usually my first pick. -->" caret-width="2px" hide-caret-after-done :speed="15" class="mt-4 text-sm" />
        </AppComment>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const skills = [
  { name: 'Symfony', comfort: 'Expert', icon: 'i-simple-icons-symfony', note: 'My backend home. APIs, auth, Doctrine.' },
  { name: 'Vue.js', comfort: 'Expert', icon: 'i-simple-icons-vuedotjs', note: 'The reason frontend doesn\'t scare me.' },
  { name: 'Docker & Compose', comfort: 'Expert', icon: 'i-simple-icons-docker', note: 'Everything I self-host lives in a container.' },
  { name: 'Nginx', comfort: 'Advanced', icon: 'i-simple-icons-nginx', note: 'Learned the hard way on a Pi. Reverse proxy, TLS.' },
  { name: 'MariaDB', comfort: 'Advanced', icon: 'i-simple-icons-mariadb', note: 'My default for Symfony projects with Doctrine.' },
  { name: 'PostgreSQL', comfort: 'Advanced', icon: 'i-simple-icons-postgresql', note: 'Picked when I need stricter data guarantees.' },
  { name: 'Nuxt', comfort: 'Proficient', icon: 'i-simple-icons-nuxtdotjs', note: 'Runs this site. Still finding its edges.' },
  { name: 'C++', comfort: 'Proficient', icon: 'i-simple-icons-cplusplus', note: 'School foundations, Discord bots with D++.' },
  { name: 'Laravel', comfort: 'Intermediate', icon: 'i-simple-icons-laravel', note: 'Can ship in it, but Symfony is home.' },
]
</script>