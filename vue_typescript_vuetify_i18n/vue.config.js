module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/my-project/'
  : '/',
  publicPath: './',
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
