var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './demo/App.jsx',
      './demo/index.html'
    ],
    output: {
        filename: '/js/app.js',
        path: __dirname + '/dist'
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include:  [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'demo')]
        }
      ],
      loaders: [{
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]'],
      },{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include:  [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'demo')]
      },{
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },{
        test: /\.scss$/,
        loader: 'style!css!sass'
      },{
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        loader: 'url?limit=10000000'
      },{
        test: /\.png$/,
        loaders: ['file']
      }]
    }
};
