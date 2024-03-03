// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.ACCESS_TOKEN }], 
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  target: 'server',
})
