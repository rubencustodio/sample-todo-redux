var path = require('path'),
    webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: ['app/assets/styles']
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=dist/fonts/[name].[ext]'
      },
      { 
        test: /\.tsx?$/,
        loader: "ts-loader" 
      }
    ]
  },
  entry: './app/index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  },
  // watch: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']
  },
  devServer: {
    publicPath: "/dist/",
    compress: true,
    port: 5000,
    watchOptions: {
      poll: true
    }
  }
};