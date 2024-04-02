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
  // @ts-ignore
  target: 'server',
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      // @ts-ignore
      if (isClient) config.resolve!.alias!.vue = 'vue/dist/vue.esm-bundler.js';
    }
  }
})
