const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
    alias: {
      '@': resolve('src'),
      '@slice': resolve('src/store/Slice'),
      '@actions': resolve('src/store/actions'),
      '@store': resolve('src/store'),
      '@atoms': resolve('src/components/atoms'),
      '@module': resolve('src/components/module/'),
      '@template': resolve('src/components/template'),
      '@lib': resolve('src/lib'),
    },
  },
  entry: {
    app: ['core-js/stable', './src/index.tsx'],
  },
  output: {
    path: path.resolve(`${__dirname}/dist/`),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
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
      '/PD': {
        target: 'http://localhost:9071/master/api/v1/pd/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/PD/': '/',
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
      // favicon: '',
      chunks: ['css', 'images', 'webfonts'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
