// ==UserScript==
// @name         Lobste.rs Vote Threshold
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Lobste.rs stories with less than a given amount of votes
// @author       bcongdon
// @match        https://lobste.rs/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const THRESHOLD = 5;
    const SHOW_TOP = 10;

    const stories = []
    let links = document.querySelectorAll(".story_liner");
    links.forEach(function(element) {
        let votes = Number(element.querySelector(".score").innerHTML);
        if (votes < THRESHOLD) {
            element.style.display = "none";
        }
        stories.push({score: votes, elem: element});
    });

    stories.sort(function(a, b) { return b.score - a.score });
    stories.slice(SHOW_TOP).forEach(function(story) {
       story.elem.style.display = "none";
    });
})();
