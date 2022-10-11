const base = require('./webpack.base')
const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const SRC = path.join(__dirname, '..')

const development = {
  name: 'Development Config',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/i,
        include: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[md4:hash:7]',
              },
            },
          },
        ],
      },
      {
        test: /\.(scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/i,
        use: ['file-loader', 'image-webpack-loader'],
        type: 'asset',
        exclude: [/.*\.DS_Store/],
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}

const mergedConfig = merge(base, development)
module.exports = mergedConfig

console.log(`The merged config for ${development.mode} mode is as follows:\n`)
console.dir(mergedConfig, { depth: null, colors: true }) + console.log('\r')

const fs = require('fs')
const file = path.resolve(SRC, 'webpack/setup/config.json')
fs.writeFile(file, (data = JSON.stringify(mergedConfig)), function (err) {
  if (err) {
    return console.log(err)
  }
})
