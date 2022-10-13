const path = require('path')
const production = require('./webpack.prod')
const { merge } = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const analyze = {
  name: 'Analyze Config',
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: path.resolve('./webpack/setup/diagnostics.json'),
    }),
  ],
}

const analyzeConfig = merge(production, analyze)
module.exports = analyzeConfig

console.log(`The analyze config for ${analyzeConfig.mode} mode is as follows:\n`)
console.dir(analyzeConfig, { depth: null, colors: true }) + console.log('\r')

const fs = require('fs')
const file = path.resolve('./webpack/setup/config.json')
fs.writeFile(file, (data = JSON.stringify(analyzeConfig)), function (err) {
  if (err) {
    return console.log(err)
  }
})
