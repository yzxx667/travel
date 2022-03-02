const path = require('path');

module.exports = {
   devServer: {
    proxy: {
        '/api': {
            target:'http://localhost:8080',
            pathRewrite: {
            '^/api': '/mock'
            }
        }
    }
   },
  chainWebpack: (config) => {
    config.resolve.alias
     .set('style',path.join(__dirname,'./src/assets/style/'))
     .set('@',path.join(__dirname,'./src/'))
     .set('common',path.join(__dirname,'./src/common/'))
  }
}