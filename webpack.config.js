const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

var path = require('path');



module.exports ={
    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js'
    },
    module: {
        rules: [
          { test: /\.js$/,
             exclude: /node_modules/, 
             loader: "babel-loader" 
          },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader" 
            }, {
                loader: "sass-loader" 
            }]
        }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from:'src/index.html',
            toType: 'dir'
        }]),
        new CleanWebpackPlugin('./dist')
        
    ]
}