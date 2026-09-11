<template>
  <UContainer class="overflow-x-clip">
    <AppSectionHeader :title="t('home.skills.title')" />

    <div class="grid min-w-0 gap-10 overflow-x-clip lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <HomeSkillsStackText />

      <div class="min-w-0">
        <AppComment uppercase>
          <AppTypewriter
            :text="t('home.skills.commentTop')"
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
          <AppTypewriter :text="t('home.skills.commentBottom')" caret-width="2px" hide-caret-after-done :speed="15" class="mt-4 text-sm" />
        </AppComment>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const skills = computed(() => [
  { name: 'Symfony', comfort: t('home.skills.comfort.expert'), icon: 'i-simple-icons-symfony', note: t('home.skills.notes.symfony'), iconHoverClass: 'group-hover:text-black dark:group-hover:text-white', },
  { name: 'Vue.js', comfort: t('home.skills.comfort.expert'), icon: 'i-simple-icons-vuedotjs', note: t('home.skills.notes.vue'), iconHoverClass: 'group-hover:text-[#4FC08D]' },
  { name: 'Docker & Compose', comfort: t('home.skills.comfort.expert'), icon: 'i-simple-icons-docker', note: t('home.skills.notes.docker'), iconHoverClass: 'group-hover:text-[#2496ED]' },
  { name: 'Nginx', comfort: t('home.skills.comfort.advanced'), icon: 'i-simple-icons-nginx', note: t('home.skills.notes.nginx'), iconHoverClass: 'group-hover:text-[#009639]' },
  { name: 'MariaDB', comfort: t('home.skills.comfort.advanced'), icon: 'i-simple-icons-mariadb', note: t('home.skills.notes.mariadb'), iconHoverClass: 'group-hover:text-[#003545] dark:group-hover:text-[#C0765A]' },
  { name: 'PostgreSQL', comfort: t('home.skills.comfort.advanced'), icon: 'i-simple-icons-postgresql', note: t('home.skills.notes.postgres'), iconHoverClass: 'group-hover:text-[#4169E1]' },
  { name: 'Nuxt', comfort: t('home.skills.comfort.proficient'), icon: 'i-simple-icons-nuxtdotjs', note: t('home.skills.notes.nuxt'), iconHoverClass: 'group-hover:text-[#00DC82]' },
  { name: 'C++', comfort: t('home.skills.comfort.proficient'), icon: 'i-simple-icons-cplusplus', note: t('home.skills.notes.cpp'), iconHoverClass: 'group-hover:text-[#00599C] dark:group-hover:text-[#659AD2]' },
  { name: 'Laravel', comfort: t('home.skills.comfort.intermediate'), icon: 'i-simple-icons-laravel', note: t('home.skills.notes.laravel'), iconHoverClass: 'group-hover:text-[#FF2D20]' },
])
</script>