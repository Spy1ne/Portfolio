module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',
  publicPath: './',
  chainWebpack: config => {
    config.module
    .rule('obj')
    .test(/\.(pdf)$/)
    .use('file-loader')
    .loader('file-loader')
  },
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
