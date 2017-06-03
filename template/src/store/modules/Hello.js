/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   94078
* @Last Modified time: 2017-05-17 15:29:31
*/

import * as types from '../mutation-types';

const state = {
    hello: 'Hello use Vuex',
};

const getters = {
    getHello(state) {
        return state.hello;
    },
};

const actions = {
};

const mutations = {
};

export default {
    state,
    getters,
    actions,
    mutations,
};
