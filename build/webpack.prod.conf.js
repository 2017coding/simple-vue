const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

const prodConfig = {
  mode: 'production', // 默认为 production(打包出来是混淆的压缩文件)
  module: {
  },
  plugins: [],
  // 产出的文件配置
  output: {
    // publicPath: './', // 文件地址(如果静态资源通过文件服务器打包，可以配置前缀名)
    filename: '[name].[contenthash].js', // 打包的文件名 (入口文件，文件名根据这个配置)
    chunkFilename: '[name].[contenthash].chunk.js' //（非入口文件， 文件名根据这个配置）
  }
}

module.exports = merge(baseConfig, prodConfig)
