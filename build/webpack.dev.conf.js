const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

const devConfig = {
  mode: 'development',
  // cheap-source-map is faster for development
  devtool: 'cheap-module-eval-source-map',
  // 配置devserve
  devServer: {
    // 配置生成目录
    contentBase: '../dist',
    // dev-server启动是否自动打开浏览器, 并访问地址
    open: false,
    // 设置端口
    port: 1122,
    // 开启热更新功能
    hot: true,
    // 设置当热更新失效， 浏览器不自动刷新
    hotOnly: true,
    // 配置代理
    proxy: {}
  },
  // 寻找loader时，指定从以下文件中找
  resolveLoader: {
    modules: ['node_modeles', '../loaders']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 开启webpack热更新功能
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConfig, devConfig)