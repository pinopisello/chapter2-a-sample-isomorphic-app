module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: __dirname + '/dist/',
    filename: "browser.js"
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|es6)$/,
        exclude: /node_modules|examples/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.es6']//quali sono i suffissi degli import che vanno incluse nel bundle.
  } ,                                               //In main.jsx per esempio si importa react.Ecco perche c'e' l empty ''
  devtool: 'source-map'
};
