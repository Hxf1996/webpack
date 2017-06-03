/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   94078
* @Last Modified time: 2017-05-13 14:16:48
*/

import Qs from 'qs';
import Axios from 'axios';

const HTTP = Axios.create({
	baseURL: 'http://118.89.141.186:8081',
	transformRequest: [
		function jsonToForm(data) {
			return Qs.stringify(data);
		},
	],
	transformResponse: [
		function jsonToArray(data) {
			return JSON.parse(data);
		},
	],
});

export default HTTP;
