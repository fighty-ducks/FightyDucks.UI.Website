// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: 'LfnCpx7XO5oL6vhh4PssMQtt' }], 
    '@nuxtjs/tailwindcss'
  ],
})
