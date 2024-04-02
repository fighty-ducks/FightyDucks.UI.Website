// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@storyblok/nuxt', 
    '@nuxtjs/tailwindcss'
  ],
  storyblok: {
    accessToken: process.env.NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  },
  ssr: false,
  target: 'server',
})
