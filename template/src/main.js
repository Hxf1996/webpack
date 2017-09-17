/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-18 00:02:28
*/

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 生产模式时关闭
if (process.env.NODE_ENV === 'development') {
    Vue.config.productionTip = true;
}

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
