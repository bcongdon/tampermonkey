// ==UserScript==
// @name         Youtube Tweaks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Always try to use "Watch Later", among other tweaks
// @author       bcongdon
// @match        http*://youtube.com/*
// @match        http*://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function processRedirects() {
        const url = new URL(document.location.href);
        if (url.pathname.indexOf("watch") >= 0) {
            let new_url = url.href + "&list=WL";
            if (url.search.indexOf('list=') == -1) {
                window.location.replace(new_url);
            }
        }
        else if (url.pathname === '/' || url.pathname.indexOf('/feed/trending') >= 0) {
            url.pathname = "/feed/subscriptions";
            window.location.replace(url.href);
        }
    }

    processRedirects();
    window.addEventListener('yt-navigate-start', function (event) {
        processRedirects();
    });
})();
