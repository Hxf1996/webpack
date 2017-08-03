/*
* @Author: 94078
* @Date:   2017-07-21 16:44:53
* @Last Modified by:   94078
* @Last Modified time: 2017-07-21 17:26:08
*/

export default 0;

export function formatDate(timeStamp, type = true) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let hour = date.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    let second = date.getSeconds();
    if (second < 10) {
        second = '0' + second;
    }
    if (type) {
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
    return `${year}-${month}-${day}`;
}
