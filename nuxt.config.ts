// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/seo', '@nuxtjs/fontaine', '@vueuse/nuxt', '@nuxtjs/google-fonts', '@pinia/nuxt', '@nuxtjs/plausible'],

  ui: {
    icons: ['tabler', 'mdi'],
  },

  googleFonts: {
    display: 'swap',
    families: {
      Inter: [400, 500, 600, 700, 900],
    },
  },

  fontMetrics: {
    fonts: ['Inter'],
  },

  colorMode: {
    preference: 'dark',
  },

  plausible: {
    enabled: false,
    ignoredHostnames: ['localhost'],
  },
});
