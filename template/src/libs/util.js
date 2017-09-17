/*
* @Author: 94078
* @Date:   2017-07-21 16:44:53
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-08 13:57:02
*/

const getStorage = (key) => {
    const value = JSON.parse(sessionStorage.getItem(key)) || '';
    return value;
};

const setStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
};

const formatDate = (timestamp, format) => {
    if (!timestamp) {
        return '';
    }
    const time = new Date(timestamp);
    const addZero = str => str.toString().padStart(2, '0');
    return format.replace(/YYYY|MM|dd|HH|mm|ss/g, (a) => {
        switch (a) {
        case 'YYYY':
            return addZero(time.getFullYear());
        case 'MM':
            return addZero(time.getMonth() + 1);
        case 'dd':
            return addZero(time.getDate());
        case 'HH':
            return addZero(time.getHours());
        case 'mm':
            return addZero(time.getMinutes());
        default:
            return addZero(time.getSeconds());
        }
    });
};

export default {
    getStorage,
    setStorage,
    formatDate,
};
