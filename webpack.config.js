var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/app', loader: 'babel-loader?presets[]=react&presets[]=es2015' },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};

