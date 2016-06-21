var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
			{ test: /\.(woff|woff2)$/, loader:'url?prefix=font/&limit=5000' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};
