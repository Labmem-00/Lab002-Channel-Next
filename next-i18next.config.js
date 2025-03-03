const path = require('path');

module.exports = {
    i18n: {
      locales: ['en', 'zh-cn'], 
      defaultLocale: 'zh-cn', 
      localPath: path.resolve('./public/locales'),
    },
  };