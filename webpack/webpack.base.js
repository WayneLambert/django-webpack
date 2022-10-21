const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')

module.exports = {
  // Resolve paths according to a context of the project's root dir ('src')
  context: path.resolve(__dirname, '..'),
  entry: {
    base: {
      import: './webpack/entries/base.ts',
    },
    appointments: {
      import: './webpack/entries/appointments.ts',
    },
    circle: {
      import: './webpack/entries/circle.ts',
    },
  },
  output: {
    path: path.resolve('./static/bundles'),
    publicPath: '/static/bundles/',
    // chunkFilename: 'js/vendor-[name].js',
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
        bootstrap: {
          test: /[\\\/]node_modules[\\\/]bootstrap[\\\/]/,
          name: 'bootstrap',
        },
        lodash: {
          test: /[\\\/]node_modules[\\\/]lodash-es[\\\/]/,
          name: 'lodash',
        },
        htmx: {
          test: /[\\\/]node_modules[\\\/]htmx.org[\\\/]/,
          name: 'htmx',
        },
        alpinejs: {
          test: /[\\\/]node_modules[\\\/]alpinejs[\\\/]/,
          name: 'alpinejs',
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
        test: /\.(js|ts)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './webpack/babel.config.json',
          },
        },
      },
      {
        test: /\.(scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('./webpack/assets/images'),
          to: path.resolve('./static/bundles/images'),
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
      filename: path.resolve('./webpack/setup/stats.json'),
    }),
  ],
  stats: {
    errorDetails: true,
    errorStack: true,
    modules: true,
    warnings: true,
    assets: false,
    builtAt: false,
    moduleAssets: true,
    nestedModules: true,
    groupModulesByAttributes: true,
    chunks: false,
  },
}
