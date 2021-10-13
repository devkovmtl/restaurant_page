const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { NODE_ENV } = process.env

const IN_PROD = NODE_ENV === 'production'

module.exports = {
  mode: IN_PROD ? 'production' : 'development',
  entry: './src/index.js',
  devtool: NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Restaurant',
      template: './src/index.html',
      hash: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
