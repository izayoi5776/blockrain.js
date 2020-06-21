const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    host: '0.0.0.0',
    port: 9000,
    writeToDisk: true
  }
};