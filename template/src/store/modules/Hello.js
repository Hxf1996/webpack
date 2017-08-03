/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   Hxf1996
* @Last Modified time: 2017-08-04 00:02:05
*/

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
