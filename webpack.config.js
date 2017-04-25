var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery:'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{

      applicationStyles: 'app/styles/app.scss',

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {//object
    loaders: [//array of different loaders to use
      {
        loader: 'babel-loader', //telling babel loader to take our files and parse them through react, get the output, and run through es2015
        query:{
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,       //$ sign looks for the end of the file name and looks for jsx
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
