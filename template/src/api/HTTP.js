/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   Hxf1996
* @Last Modified time: 2017-06-19 16:06:26
*/

import Axios from 'axios';

const HTTP = Axios.create({
	baseURL: 'http://118.89.141.186:8081',
	transformResponse: [
		function jsonToArray(data) {
			return JSON.parse(data);
		},
	],
});

export default HTTP;
