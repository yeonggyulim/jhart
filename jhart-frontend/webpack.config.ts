import * as path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name]-bundle.js',
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.(js|ts)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react'
          ],
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '',
			filename: './index.html',
		}),
  ]
}

