const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../static/bundles'),
    filename: '[name].[contentHash].js',
    clean: true,
  },
})
