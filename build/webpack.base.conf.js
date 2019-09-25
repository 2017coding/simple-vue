const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js', // (key: 打包默认生成的名字 value: 从哪个文件开始打包)
  },
  // 模块打包配置
  module: {
  },
  plugins: [
    new HtmlWebpackPlugin(
      // 配置模版之后，生成的html会使用这个模版
      {
        template: './public/index.html'
      }
    ),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}