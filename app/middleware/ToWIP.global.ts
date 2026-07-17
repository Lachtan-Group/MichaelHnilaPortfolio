export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/work-in-progress') {
    return navigateTo('/work-in-progress')
  }
})
