// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    'nuxt-studio'
  ],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: 'PortfolioSite',
      htmlAttrs: {
        lang: 'en'
      }
    },
  },

  site: {
    name: 'Michael Hnila Portfolio',
    url: 'portfolio.lachtan.top'
  }
})
