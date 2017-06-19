/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   Hxf1996
* @Last Modified time: 2017-06-19 16:05:01
*/

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: () => import('@/components/Hello'),
        },
    ],
});
