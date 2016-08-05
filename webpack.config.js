const path = require('path')
require('webpack')

var APP_DIR = path.join(__dirname, 'src')
var BUILD_DIR = path.join(__dirname, 'public/js')

const config = {
  context: APP_DIR,
  devtool: '#source-map',
  entry: {
    auth: ['./auth.js'],
    erros: ['./errors.js'],
    lists: ['./lists.js'],
    users: ['./users.js']
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: APP_DIR,
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  }
}

module.exports = config
