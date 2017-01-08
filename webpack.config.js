/*import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
import AssetsPlugin from 'assets-webpack-plugin';*/

const NODE_ENV = process.env.NODE_ENV || "development";

const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + '/bin',
        filename: '[name].js',
        library: 'home'
    },

      watch: NODE_ENV == "development", //типа LiveReload def=( watch: true),
    watcherOptions: {
        aggregateTimeout: 100 //отсрочка сборки
    },
    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null, // для дебага

 plugins:[
       /* new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV) //NODE_ENV=development webpack
        })*/
         new webpack.EnvironmentPlugin([
             "NODE_ENV"
         ])
    ],

    module: {
        loaders: [
            {
                test   : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader : 'babel'
            } ,
            {test: /\.jade$/, loader: "jade"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.css$/, loaders: ["style", "css"]},
        ]
    }
};