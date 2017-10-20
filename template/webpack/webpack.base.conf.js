/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-17 23:43:58
*/
/* eslint-disable */

var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');
var resolveConfig = require('./webpack.resolve.conf');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

// 获得打包类型 默认daily
var buildType = JSON.parse(process.env.npm_config_argv)['remain'][0] || 'daily';
var assetsPublicPath = '';
if (process.env.NODE_ENV === 'production') {
    assetsPublicPath = config.build.assetsPublicPath[buildType];
} else {
    assetsPublicPath = config.dev.assetsPublicPath;
}

const baseConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: assetsPublicPath
    },
    resolve: resolveConfig.resolve,
    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
        },
        {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
            include: [resolve('src')]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    }
};

if (process.env.NODE_ENV === 'production') {
    baseConfig.module.rules.push({
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
            formatter: require('eslint-friendly-formatter')
        }
    });
}

module.exports = baseConfig;
