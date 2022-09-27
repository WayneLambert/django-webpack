const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const BundleTracker = require('webpack-bundle-tracker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../static/bundles'),
    filename: 'js/[name].js',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new BundleTracker({
      filename: './webpack/stats/webpack-stats.json',
    }),
  ],
})
