const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')

const SRC = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    index: './webpack/index.ts',
    vendor: './webpack/assets/scripts/vendor.js',
    circle: './webpack/assets/scripts/circle.ts',
  },
  output: {
    path: path.resolve(SRC, 'static/bundles'),
    assetModuleFilename: 'TEST',
    publicPath: '/static/bundles/',
    clean: true,
  },
  resolve: {
    // What extensions webpack should understand (allows import statements to leave out the extension)
    extensions: ['.ts', '...'],
    alias: {
      src: path.resolve(__dirname, '..'),
    },
  },
  optimization: {
    moduleIds: 'named',
    runtimeChunk: 'single',
    splitChunks: {
      hidePathInfo: false,
      maxInitialRequests: Infinity,
      minSize: 0,
      maxSize: Infinity,
      cacheGroups: {
        bootstrap: {
          name: 'bootstrap',
          test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
        },
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
        flatpickr: {
          name: 'flatpickr',
          test: /[\\/]node_modules[\\/]flatpickr[\\/]/,
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(SRC, 'webpack/assets/images'),
          to: path.resolve(SRC, 'static/bundles/images'),
        },
      ],
    }),
    new BundleTracker({
      filename: path.resolve(SRC, 'webpack/stats/webpack-stats.json'),
    }),
  ],
  stats: {
    errorDetails: false,
    errorStack: false,
    modules: true,
    warnings: true,
  },
}
