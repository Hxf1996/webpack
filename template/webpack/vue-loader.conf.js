/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   Hxf1996
* @Last Modified time: 2017-08-03 23:46:40
*/
/* eslint-disable */

var utils = require('./utils');
var config = require('../config');
var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
};
