/*
* @Author: 94078
* @Date:   2017-04-30 15:20:09
* @Last Modified by:   Hxf1996
* @Last Modified time: 2017-08-04 00:03:45
*/

import Qs from 'qs';
import Axios from 'axios';

const HTTP = Axios.create({
    baseURL: 'http://118.89.141.186:8081',
    transformRequest: [
        data => Qs.stringify(data),
    ],
    transformResponse: [
        data => JSON.parse(data),
    ],
});

export default HTTP;
