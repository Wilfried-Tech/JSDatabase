const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'JSDatabase.js',
    clean: true,
    library: 'DatabaseJS',
    libraryTarget: 'window'
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
        use: ['ts-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    alias: {
      "@src": path.resolve(__dirname,"../src/")
    }
  }
};
