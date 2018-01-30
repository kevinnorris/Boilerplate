const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = p => path.resolve(__dirname, p);

module.exports = {
  // Entry point for Webpack
  entry: ['react-hot-loader/patch', './src/index.js'],

  // Output build directory
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    modules: [resolve('src'), resolve('node_modules')],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: [resolve('src')],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: false,
              localIdentName: '[local]--[hash:base64:5]',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|pdf|gif|png|wav|mp3)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'url-loader',
        include: [resolve('src')],
      },
      {
        // Run Babel transpiler on all .JS and .JSX files
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { "modules": false }], 'react', 'stage-2'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: resolve('dist'),
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    inline: true,
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),  // is duplicate as devServer already has hot
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.html'),
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      __TEST__: false,
      __PROD__: false,
    }),
  ],
};
