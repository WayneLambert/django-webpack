const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './webpack/index.js',
    vendor: './webpack/assets/scripts/vendor.js',
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(js|ts)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: [
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: [/\.module\.css$/i, '/node_modules/'],
      },
      {
        test: /\.(scss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/templates/base_webpack.html',
      filename: '../../core/templates/core/_base.html',
      publicPath: '/static/bundles',
      xhtml: true,
    }),
  ],
}
