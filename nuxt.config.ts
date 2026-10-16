// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-studio',
  ],

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logos/spaces.svg' }
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

  routeRules: {
    '/blog/**': { prerender: true },
    '/es/blog/**': { prerender: true }
  },

  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    },
    prerender: {
      crawlLinks: true,
      routes: ['/blog', '/es/blog']
    }
  },

  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'molavec',
      repo: 'landing.workspices.online',
      branch: 'dev'
    }
  },


  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
})