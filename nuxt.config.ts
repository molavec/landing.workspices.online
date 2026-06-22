// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/layout-panel-top.svg' }
      ]
    }
  },

  // useScript production only enabled
  $production: {
    scripts: {
      registry: {
        googleTagManager: {
          id: 'GTM-NL656GHX',
        },
      },
    },
  },

  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },


  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
})