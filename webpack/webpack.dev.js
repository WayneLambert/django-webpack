const base = require('./webpack.base')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { reportConfig } = require('./funcs/output.js')

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
        include: /node_modules/,
        // type: 'asset/resource',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
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
      linkType: 'text/css',
    }),
  ],
}

const mergedConfig = merge(base, development)
module.exports = mergedConfig

reportConfig(mergedConfig, development.mode)
