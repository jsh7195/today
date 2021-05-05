const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const domain = process.env.NODE_ENV === 'local' ? 'http://localhost:9071' : 'http://221.139.14.153:9071'
const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
      '@slice': resolve('src/store/Slice'),
      '@actions': resolve('src/store/actions'),
      '@atoms': resolve('src/components/atoms/'),
      '@module': resolve('src/components/module/'),
      '@template': resolve('src/components/template/'),
      '@lib': resolve('src/lib/'),
      '@const': resolve('src/constants/serviceConstants'),
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
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react','@babel/preset-typescript'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader', { loader: 'url-loader' }],
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
    ],
  },
  devServer: {
    port: 7000,
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
    },
  },

  optimization: {
    minimize: false,
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
  ],
};
