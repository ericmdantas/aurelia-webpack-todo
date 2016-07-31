module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css!'},
      {test: /\.js$/, loader: 'babel'}
    ]
  }
}
