const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../static/bundles'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new BundleTracker({
      filename: './webpack/stats/webpack-stats.json',
    }),
  ],
})
