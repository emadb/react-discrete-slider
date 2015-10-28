var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
      path.resolve(__dirname, 'src/components/App.jsx'),
      './src/index.html'
    ],
    plugins: [
      new ExtractTextPlugin('app.css', {allChunks: true}),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    output: {
        filename: '/js/app.js',
        path: __dirname + "/dist"
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      loaders: [{
        test: /\.html$/,
        loaders: ["file?name=[name].[ext]"],
      },{
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')

      },{
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        loader: 'url?limit=10000000'
      },{
        test: /\.png$/,
        loaders: ['file']
      }]
    }
};
