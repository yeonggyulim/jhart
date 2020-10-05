import * as path from 'path';
import * as webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration;
}

const WDS_PORT = 8080;

const mode = process.env.NODE_ENV as 'development' || 'production';

const config: Configuration = {
  mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name]-bundle.js',
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
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
      title: 'JHArt',
      template: './public/index.html',
      filename: './index.html',
    }),
  ],

  devServer: {
    overlay: true,
    port: WDS_PORT,
  }
}

export default config;
