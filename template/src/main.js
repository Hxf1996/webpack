/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   94078
* @Last Modified time: 2017-05-17 15:26:24
*/

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 生产模式时关闭
Vue.config.productionTip = true;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
