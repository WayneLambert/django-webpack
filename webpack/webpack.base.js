const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')
const { log } = require('console')

const SRC = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    index: './webpack/index.ts',
    vendor: './webpack/assets/scripts/vendor.js',
    circle: './webpack/assets/scripts/circle.ts',
  },
  output: {
    path: path.resolve(SRC, 'static/bundles'),
    publicPath: '/static/bundles/',
    clean: true,
  },
  resolve: {
    // What extensions webpack should understand (allows import statements to leave out the extension)
    extensions: ['.ts', '...'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      hidePathInfo: false,
      maxInitialRequests: Infinity,
      minSize: 0,
      maxSize: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name(module) {
            if (module.context !== SRC) {
              let packageName = module.context.match(/[\\\/]node_modules[\\\/](.*?)([\\\/]|$)/)[1]
              return `npm.${packageName.replace('@', '')}`
            }
          },
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
    new webpack.ids.HashedModuleIdsPlugin(),
    new WebpackShellPluginNext({
      onAfterDone: {
        scripts: [
          'npx prettier --write ./webpack/setup/config.json',
          'echo "The merged config.json was saved."',
          'echo "**********************************************************************"',
        ],
        blocking: true,
        parallel: false,
      },
    }),
    new BundleTracker({
      filename: path.resolve(SRC, 'webpack/setup/stats.json'),
    }),
  ],
  stats: {
    errorDetails: false,
    errorStack: false,
    modules: true,
    warnings: true,
    // assets: false,
  },
}
