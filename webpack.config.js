const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: {
    index: './core/static/index.js',
    vendor: './core/static/scripts/vendor.js',
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/base_webpack.html',
      filename: '../core/templates/core/_base.html',
      publicPath: '/static/',
      xhtml: true,
    }),
    new BundleTracker({
      filename: './core/static/webpack-stats.json',
    }),
  ],
  module: {
    rules: [
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
      {
        test: /\.ts$/i,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
