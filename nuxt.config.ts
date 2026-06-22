// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/layout-panel-top.svg' }
      ]
    }
  },

  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
})