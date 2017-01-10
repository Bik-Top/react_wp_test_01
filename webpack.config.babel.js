/*import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
import AssetsPlugin from 'assets-webpack-plugin';*/


const NODE_ENV = process.env.NODE_ENV ;

const webpack = require('webpack');




module.exports = {
    context: __dirname,
    entry: {
        app: './src/app.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        //library: 'home'
    },


    stats: {
        colors: true,
        timings: true,
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null, // для дебага

    watch: NODE_ENV == 'development', //типа LiveReload def=( watch: true),
    watcherOptions: {
        aggregateTimeout: 100 //отсрочка сборки
    },
    plugins: [
        /* new webpack.DefinePlugin({
         NODE_ENV: JSON.stringify(NODE_ENV) //NODE_ENV=development webpack
         })*/
     /*   new webpack.EnvironmentPlugin(
            [
                'NODE_ENV' //NODE_ENV=development webpack
            ]
        ),*/
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV) //NODE_ENV=development webpack
        })

    ],
    resolve:{
        extensions: ['', '.jade', '.jsx', '.js'],
    },


/*    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
        },
        {
            'react-router': {
                root: 'ReactRouter',
                commonjs2: 'react-router',
                commonjs: 'react-router',
                amd: 'react-router',
            },
        },
    ],*/

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            } ,
            {
                test: /\.jade$/, loader: 'jade'
            },
            {
                test: /\.css$/, loader: 'style!css'
            },
            {
                test: /\.css$/, loaders: ['style', 'css']
            },
        ]
    },
};

if(NODE_ENV  == 'prodaction'){
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      })
  );
}