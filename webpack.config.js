'use strict'

const path = require('path')

module.exports = {
  entry: {
    app: path.join(__dirname, 'init')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      { test: /\.css$/,
        use: [
          { loader: 'style' },
          { loader: 'css' }
        ]
      },
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }]
      }
    ]
  }
}
