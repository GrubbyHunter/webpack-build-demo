/**
 * @desc webpack 配置文件
 * @author Grubby
 */
const path = require('path')
const webpack = require('webpack')
const _ = require('lodash')
let FixedChunkIdPlugin = require('./plugin/FixedChunkIdPlugin')

let webpackConfig = {

  entry: {
    "page_a": "./page_a.js",
    "page_b": "./page_b.js",
    "page_c": "./page_c.js"
  },

  output: {
    filename: 'newDist/[name]_[chunkhash].js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new FixedChunkIdPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "newDist/common_[chunkhash].js"
    })
  ]
}
let compiler = webpack(webpackConfig)
compiler.run(function () {
  console.log("webpack 打包成功")
})