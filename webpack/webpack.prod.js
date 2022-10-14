const base = require('./webpack.base')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const reportConfig = require('./funcs/output.js').reportConfig

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
        test: /\.(jpg|jpeg|gif|png|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 75,
              },
              pngquant: {
                quality: [0.75, 0.9],
                speed: 4,
              },
            },
          },
        ],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[name].[contenthash:12][ext]',
        },
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

reportConfig(mergedConfig, production.mode)
