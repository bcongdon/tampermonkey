// ==UserScript==
// @name         Block sites
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Block sites. Edit the "@match" settings to choose which sites to block.
// @author       bcongdon -- Original Author: Laphy
// @match        http*://hckrnews.com*
// @match        http*://news.ycombinator.com*
// @match        http*://twitter.com*
// @match        http*://www.instagram.com*
// @match        http*://www.linkedin.com*
// @match        http*://www.facebook.com*
// @grant        GM_addStyle
// @run-at       document-start
// @require      http://code.jquery.com/jquery-2.2.4.js
// ==/UserScript==

(function() {
    'use strict';

    $("body").css("visibility", "hidden");
    $(document).ready(function() {
        $('body').html('<div id="blocked">Blocked. 🙅🏻‍♂️</div>');
        $("body").css("visibility","visible");

        GM_addStyle(`#blocked {
            height: 300px;
            margin: 50px;
            padding: 50px;
            font-size:20pt;
            text-align:center;
            }`
        );
    });
})();
