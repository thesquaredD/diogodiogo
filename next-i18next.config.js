module.exports = {
    // https://www.i18next.com/overview/configuration-options#logging
    debug: process.env.NODE_ENV === 'development',
    i18n: {
      defaultLocale: 'pt',
      locales: ['en', 'pt'],
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  }