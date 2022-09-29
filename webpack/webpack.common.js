const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC = path.join(__dirname, '..')

module.exports = {
  entry: {
    index: path.resolve(SRC, 'webpack/index.js'),
    vendor: path.resolve(SRC, 'webpack/assets/scripts/vendor.js'),
  },
  output: {
    path: path.resolve(SRC, 'static/bundles'),
    publicPath: '/static/bundles',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
          },
        ],
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC, 'webpack/templates/base_webpack.html'),
      filename: path.resolve(SRC, 'webpack/core/templates/core/_base.html'),
      xhtml: true,
    }),
  ],
  stats: {
    errorDetails: false,
    errorStack: false,
    modules: false,
    version: false,
    warnings: false,
  },
}
