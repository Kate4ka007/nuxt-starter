export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Starter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    ['@nuxtjs/yandex-metrika',
    {
      id: '94673343',
      webvisor: true,
      clickmap: true,
      // useCDN:false,
      trackLinks: true,
      accurateTrackBounce: true
    }
  ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/yandex-metrika',
    {
      id: '94673343',
      webvisor: true,
      clickmap: true,
      // useCDN:false,
      trackLinks: true,
      accurateTrackBounce: true
    }
  ],
  '@nuxtjs/google-analytics'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'static',
  router: {
    base: 'http://kate4ka007.github.io/nuxt-starter'
  },

  googleAnalytics: {
    id: 'G-NWL4WQK07L'
  }
}
