const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../static/bundles'),
    filename: 'js/[name].[contentHash].js',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash].css',
    }),
  ],
})
