const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { NODE_ENV } = process.env

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  devtool: NODE_ENV === 'production' ? 'none' : 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}
