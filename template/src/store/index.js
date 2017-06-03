/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   94078
* @Last Modified time: 2017-05-17 15:28:32
*/

import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

import hello from './modules/Hello.js';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
    },
    modules: {
        hello,
    },
    actions,
    getters,
    mutations,
});
