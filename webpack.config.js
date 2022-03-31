const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'databasejs.js',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'Development',
      filename: './test/index.html',
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
      }
    ]
  }
};
