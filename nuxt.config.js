export default {
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
    }, {
      'http-equiv': 'x-ua-compatible',
      content: 'ie=edge',
    }],
  },

  loading: {
    color: '#0f0',
  },

  modules: [
    ['@nuxtjs/pwa', {
      meta: {
        name: 'PWA name',
        author: 'Infant Frontender',
        description: false,
        ogType: false,
        ogSiteName: false,
        ogTitle: false,
      },
      manifest: {
        name: 'PWA manifest name',
        short_name: 'PWA manifest short name',
        lang: 'ru',
      },
    }],
  ],

  router: {
    linkActiveClass: 'route-active',
    linkExactActiveClass: 'route-active--exact',
  },

  build: {
    postcss: {
      preset: {
        stage: 1,
      },

      autoprefixer: {
        grid: true,
      },
    },

    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(jsx?|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      };
    },
  },
};
