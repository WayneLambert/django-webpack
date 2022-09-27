const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: '[name].[contentHash].bundle.js',
    clean: true,
  },
})
