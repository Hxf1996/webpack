/*
* @Author: Hxf1996
* @Date:   2017-06-19 02:15:58
* @Last Modified by:   Hxf1996
* @Last Modified time: 2017-06-19 02:16:44
*/

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', () => {
    self.clients.matchAll({ type: 'window' }).then(windowClients => {
        for (let windowClient of windowClients) {
            windowClient.navigate(windowClient.url);
        }
    });
});