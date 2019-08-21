/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-08-21 16:41:16
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-08-21 17:06:30
*/

var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool:'#eval-source-map',
    mode:'development',
    devServer: {
        inline: true,
        port: 8787,
        host: '0.0.0.0'
    },
    entry:{
        main:[path.join(__dirname, '../src/entry.js')]
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: './src/js/[name].js',
        publicPath: ''
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            filename: './index.html',
            //favicon: path.resolve(__dirname, '../favicon.ico'),
            chunks: ['main']
        }),
        new webpack.DefinePlugin({
            'CLIENT_ENV':JSON.stringify('dev')
        })
    ],
    resolve:{
        alias: {
            Components: path.resolve(__dirname, '../src/components/'),
            Action: path.resolve(__dirname, '../src/action/'),
            Reducer:path.resolve(__dirname,'../src/reducer'),
            Common:path.resolve(__dirname,'../src/common'),
            Util:path.resolve(__dirname,'../src/util'),
            Image:path.resolve(__dirname,'../src/image')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test:/\.(png|jpg|gif|eot|svg|ttf|woff)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }, {
                test: /\.html?$/,
                exclude: /node_modules/,
                use: ['html-loader']
            },{
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }
        ]
    }
}