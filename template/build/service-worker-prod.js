/*
* @Author: Hxf1996
* @Date:   2017-06-19 02:15:58
* @Last Modified by:   Hxf1996
* @Last Modified time: 2017-06-19 02:28:08
*/

(function() {
    'use strict';

    const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );

    window.addEventListener('load', function() {
        if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocalhost)) {
            navigator.serviceWorker.register('service-worker.js')
            .then(function(registration) {
                registration.onupdatefound = function() {
                    if (navigator.serviceWorker.controller) {
                        const installingWorker = registration.installing;
                        installingWorker.onstatechange = function() {
                            switch (installingWorker.state) {
                            case 'installed':
                            break;

                            case 'redundant':
                                throw new Error('The installing service worker became redundant.');

                            default:
                            }
                        };
                    }
                };
            }).catch(function(e) {
                console.error('Error during service worker registration:', e);
            });
        }
    });
})();
