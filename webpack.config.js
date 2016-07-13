var webpack = require('webpack');

module.exports = {
  entry:[
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'  //react-hot!babel
    }],
    postLoaders: [{
      test:/\.js$/,
      loaders:['es3ify-loader']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist/static',
    publicPath: '/',
    filename:'bundle.js'
  },
  babel: {
    plugins:['transform-runtime']
  },
  // NOTE:不要使用webpack -p命令，使用以下配置执行webpack，保持IE8兼容性(只压缩、不混淆，否则影响generator)
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
