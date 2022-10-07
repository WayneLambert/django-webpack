const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')

const SRC = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    index: path.resolve(SRC, 'webpack/index.ts'),
    vendor: path.resolve(SRC, 'webpack/assets/scripts/vendor.js'),
    flatpickr: path.resolve(SRC, 'webpack/assets/vendor/flatpickr.js'),
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
    moduleIds: 'named',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      maxSize: Infinity,
      cacheGroups: {
        htmx: {
          name: 'htmx',
          test: /[\\/]node_modules[\\/]htmx.org[\\/]/,
        },
        alpinejs: {
          name: 'alpinejs',
          test: /[\\/]node_modules[\\/]alpinejs[\\/]/,
        },
        lodash: {
          name: 'lodash-es',
          test: /[\\/]node_modules[\\/]lodash-es[\\/]/,
        },
      },
    },
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
      filename: path.resolve(SRC, 'core/templates/core/head_tags/temp.txt'),
      inject: false,
      minify: {
        collapseWhitespace: false,
        keepClosingSlash: true,
      },
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
    new WebpackShellPluginNext({
      onAfterDone: {
        scripts: ['python ./webpack/management/split_head_tags.py'],
        blocking: true,
        parallel: false,
      },
    }),
  ],
  stats: {
    errorDetails: false,
    errorStack: false,
    modules: true,
    warnings: true,
  },
}
