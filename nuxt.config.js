import 'dotenv/config'
import frontMatter from './utils/front-matter'

export default {
  // BETA
  mode: 'universal',
  loadingIndicator: {
    name: 'cube-grid',
    color: '#0BDCA0',
    background: 'white'
  },
  // END BETA
  // mode: 'universal',
  target: 'static',
  // Activate components auto discovery
  components: true,
  // Disable loading bar
  loading: false,
  head: {
    ...frontMatter({
      path: '',
      noindex: true // fallback noindex for SPA fallback
    }),
    bodyAttrs: {
      class: [
        'font-body antialiased overflow-x-hidden overflow-y-scroll text-grey-900 min-w-body'
      ]
    }
  },
  plugins: [
    '~/plugins/init',
    '~/plugins/gsap.client',
    '~/plugins/vue-placeholders',
    '~/plugins/detect-client.client',
    '~/plugins/twitter-like',
    '~/plugins/intersection-observer.client',
    '~/plugins/vue-observe-visibility.client',
    '~/plugins/password.client'
  ],
  router: {
    prefetchPayloads: false
  },
  generate: {
    cache: {
      ignore: ['netlify.toml', 'jsconfig.json']
    },
    fallback: '404.html' // For Netlify
  },
  modules: ['@nuxt/content'],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // Doc: https://strapi.nuxtjs.org
    '@nuxtjs/strapi',
    // Doc: https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy'
    // '@nuxtjs/pwa',
  ],
  // pwa: {
  //   manifest: {
  //     name: 'Vue Telemetry',
  //     short_name: 'VT',
  //     description: 'Discover websites made with Vue.js',
  //     background_color: '#ffffff',
  //     theme_color: '#0BDCA0'
  //   },
  //   // meta: false,
  //   // meta: {
  //   //   ogHost: 'https://vuetelemetry.com',
  //   //   ogImage: {
  //   //     path: '/og-image.jpg'
  //   //   },
  //   //   twitterCard: 'summary_large_image',
  //   //   twitterSite: '@vuetelemetry'
  //   // },
  //   icon: true
  // },
  proxy: {
    // BETA
    '/api/password': {
      target: 'http://localhost:8888'
    },
    // END BETA
    '/api/analyze': {
      target: 'http://localhost:8888'
    }
  }
}
