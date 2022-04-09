const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'JSDatabase.js',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'Development',
      filename: '../test/index.html',
      template: './test/template/index.html',
      scriptLoading: 'blocking'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  }
};
