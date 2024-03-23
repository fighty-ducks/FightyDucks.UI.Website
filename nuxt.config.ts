// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: 'KRmHh5HuWmpQlQUx3y8kHQtt' }], 
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  target: 'server',
})
