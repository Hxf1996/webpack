/*
* @Author: 94078
* @Date:   2017-04-15 11:22:00
* @Last Modified by:   94078
* @Last Modified time: 2017-05-17 15:29:22
*/

import * as types from './mutation-types';

export const getHello = ({ commit }) => {
    commit(types.GET_HELLO);
};
