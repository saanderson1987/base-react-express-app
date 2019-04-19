const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'frontend/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devtool: 'source-map'
};

// include: path.resolve(__dirname, "frontend"),
// entry: '/frontend/index.js',
