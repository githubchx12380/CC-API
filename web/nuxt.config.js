
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:'CC插件-分享优质的chrome插件',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'CC插件,插件下载,chrome扩展插件下载,软件,效率,学习,开发者工具,视频,美工,翻译,主题美化'},
      { hid: 'description', name: 'description', content:'CC插件-分享优质的chrome插件,chrome插件,网页翻译、开发者工具、编程学习、图像影音、主题美化、设计美工、购物、去广告、插件、脚本推荐等,为您的生活,学习提升效率'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@assets/init.css',
    '@assets/style.css',
    '@assets/transletion.css',
    '@assets/theme.css',
  ],
  server: {
    port: 3000, // default: 3000
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/index',
    '@/plugins/route',
    '@/middleware/stats'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
