import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat:true
    }
  },
  
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/scripts'
  ],

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  content: {
    experimental: { sqliteConnector: 'native',  nativeSqlite: true },
  },
})