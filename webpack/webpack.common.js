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
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/templates/base_webpack.html',
      filename: '../../core/templates/core/_base.html',
      publicPath: '/static/bundles',
      xhtml: true,
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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
        exclude: '/node_modules/',
      },
    ],
  },
}
