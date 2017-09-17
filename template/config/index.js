/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-17 23:38:37
*/
/* eslint-disable */

var path = require('path');

var entry = 'build';

module.exports = {
    build: {
        entry: entry,
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../' + entry + '/index.html'),
        assetsRoot: path.resolve(__dirname, '../' + entry),
        assetsSubDirectory: 'static',
        assetsPublicPath: {
            daily: 'http://daily',
            gray: 'http://gray',
            master: 'http://master'
        },
        productionSourceMap: true,
        // setting to `true`, make sure to: npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: false,
    },
    dev: {
        env: require('./dev.env'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
        },
        cssSourceMap: false
    }
};
