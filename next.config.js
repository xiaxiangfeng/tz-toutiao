const withSass = require('@zeit/next-sass')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  },
  webpack (config) {
    config.module.rules.unshift({
      test: /\.(js)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [
        resolve('component'),
        resolve('pages'),
        resolve('actions'),
        resolve('reducer'),
        resolve('store'),
        resolve('lib')],
      options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true
      }
    })
    return config
  }
})
