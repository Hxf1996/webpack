import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 生产模式时关闭
if (process.env.NODE_ENV === 'development') {
    Vue.config.productionTip = true;
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
