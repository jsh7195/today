const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, 'ant-theme-vars.less'), 'utf8')
);
const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.less'],
    alias: {
      '@': resolve('src'),
      '@slice': resolve('src/store/Slice'),
      '@actions': resolve('src/store/actions'),
      '@store': resolve('src/store'),
      '@atoms': resolve('src/components/atoms'),
      '@module': resolve('src/components/module'),
      '@template': resolve('src/components/template/'),
      '@lib': resolve('src/lib'),
    },
  },
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: path.resolve(`${__dirname}/dist`),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader?-url',
          },
        ],
      },
      {
        test: /\.(less)$/,
        loader: 'less-loader', // compiles Less to CSS
      },
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract([
      //     { loader: 'css-loader' },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         modifyVars: themeVariables,
      //         root: path.resolve(__dirname, './'),
      //       },
      //     },
      //   ]),
      // },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    // https:false,
    contentBase: path.resolve(`${__dirname}`),
    inline: true,
    writeToDisk: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 5000,
      aggregateTimeout: 1000,
      ignored: ['node_modules'],
    },
    proxy: {
      '/WATER/TEMP': {
        target: `https://api.hangang.msub.kr`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/WATER/TEMP': '/',
        },
      },
      '/COIN/INFO/': {
        target: `https://api.upbit.com/v1/`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/COIN/INFO/': '/',
        },
      },
      '/BINANCE': {
        target: `https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/BINANCE': '',
        },
      },
      '/DATAKR': {
        target: `http://openapi.data.go.kr/openapi/service/rest`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/DATAKR': '',
        },
      },
      '/SUB-DATAKR/': {
        target: `http://apis.data.go.kr/B552584/`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/SUB-DATAKR/': '/',
        },
      },
      '/SUB-DATAKR2/': {
        target: `http://openapi.molit.go.kr:8081`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/SUB-DATAKR2/': '/',
        },
      },
      '/LOCALTEMP/': {
        target: `http://localhost:8080`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/LOCALTEMP/': '/',
        },
      },
    },
  },

  optimization: {
    minimize: true,
    splitChunks: {},
    concatenateModules: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      chunks: ['css', 'images', 'webfonts'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([{ from: 'public/assets', to: './assets/' }]),
    new dotenv(),
  ],
};
