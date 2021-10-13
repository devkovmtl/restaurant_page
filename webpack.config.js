const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { NODE_ENV } = process.env

const IN_PROD = NODE_ENV === 'production'

module.exports = {
  mode: IN_PROD ? 'production' : 'development',
  entry: './src/index.js',
  plugins: [
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
}
