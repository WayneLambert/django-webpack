const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const SRC = path.join(__dirname, '..')

module.exports = {
  entry: {
    index: path.resolve(SRC, 'webpack/index.js'),
    vendor: path.resolve(SRC, 'webpack/assets/scripts/vendor.js'),
  },
  output: {
    path: path.resolve(SRC, 'static/bundles'),
    publicPath: '/static/bundles/',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC, 'webpack/templates/base_webpack.ejs'),
      filename: path.resolve(SRC, 'core/templates/core/_base.html'),
      inject: false,
      minify: { collapseWhitespace: false },
      xhtml: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(SRC, 'webpack/assets/images'),
          to: path.resolve(SRC, 'static/bundles/images'),
        },
      ],
    }),
  ],
  stats: {
    errorDetails: false,
    errorStack: false,
    modules: true,
    warnings: true,
  },
}
