const path = require('path')

function resolveRealPath(url) {
  return path.join(__dirname, url)
}

module.exports = {
  publicPath: 'sorting-visualizer',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@store', resolveRealPath('src/store'))
      .set('@router', resolveRealPath('src/router'))
      .set('@views', resolveRealPath('src/views'))
      .set('@components', resolveRealPath('src/components'))
      .set('@constants', resolveRealPath('src/constants'))
      .set('@service', resolveRealPath('src/service'))
      .set('@assets', resolveRealPath('src/assets'))
      .set('@utils', resolveRealPath('src/utils'))
      .set('@sass', resolveRealPath('src/sass'))
      .set('@directives', resolveRealPath('src/directives'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/sass/variables.sass"'
      }
    }
  }
}
