const base = require('./webpack.base')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')

const production = {
  name: 'Production Config',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash:12].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.css$/i,
        include: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64]',
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
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[name].[contenthash:12][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 60,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
}

const mergedConfig = merge(base, production)
module.exports = mergedConfig

console.log(`The merged config for ${production.mode} mode is as follows:\n`)
console.dir(mergedConfig, { depth: null, colors: true }) + console.log('\r')

const fs = require('fs')
const file = path.resolve('./webpack/setup/config.json')
fs.writeFile(file, (data = JSON.stringify(mergedConfig)), function (err) {
  if (err) {
    return console.log(err)
  }
})
