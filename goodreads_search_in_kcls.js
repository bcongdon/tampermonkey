// ==UserScript==
// @name         Goodreads Search in KCLS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @icon         https://www.google.com/s2/favicons?domain=goodreads.com
// @grant        none
// @match        https://www.goodreads.com/book/show/*
// @match        https://www.goodreads.com/review/list/*
// @run-at       document-idle
// ==/UserScript==

// Adapted from https://github.com/soapdog/webextension-goodriddance

/**
 * Goodriddance add-on
 *
 * Andre Alves Garzia (andre@andregarzia.com)
 * 2021-05-25
 *
 * License: MIT
 *
 * Adds a "Search Book in The StoryGraph" to Goodreads.
 */

(function() {
    'use strict';

    // Add a link to the book preview page.
    let wtrButtonContainer = document.querySelector(".wtrButtonContainer");
    if (wtrButtonContainer) {
        let title = document.getElementById("bookTitle").innerText;
        let authors = document.getElementById("bookAuthors").innerText.replace("(Goodreads Author)","").replace("(Translator)","");
        wtrButtonContainer.insertAdjacentHTML('afterend', `
<style>
.goodriddance-button {
	background-color: rgb(244, 241, 234);
	border-bottom-color: rgb(214, 208, 196);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-image-outset: 0;
	border-image-repeat: stretch;
	border-image-slice: 100%;
	border-image-source: none;
	border-image-width: 1;
	border-left-color: rgb(214, 208, 196);
	border-left-style: solid;
	border-left-width: 1px;
	border-right-color: rgb(214, 208, 196);
	border-right-style: solid;
	border-right-width: 1px;
	border-top-color: rgb(214, 208, 196);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border-top-style: solid;
	border-top-width: 1px;
	color: rgb(51, 51, 51);
	cursor: pointer;
	display: inline-block;
	font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
	font-size: 14px;
	line-height: 14px;
	overflow-wrap: break-word;
	padding-bottom: 8px;
	padding-left: 12px;
	padding-right: 12px;
	padding-top: 8px;
	text-align: center;
	text-decoration: rgb(51, 51, 51);
	text-decoration-color: rgb(51, 51, 51);
	text-decoration-line: none;
	text-decoration-style: solid;
	text-decoration-thickness: auto;
	width: 122px;
	margin-top: 0px;
    margin-bottom: 5px;
}
</style>
<a class="goodriddance-button" href="https://kcls.bibliocommons.com/v2/search?searchType=smart&query=${title}+${authors}" target="_blank">Search Book in KCLS</a>
`);
    }

    // Add a link to each entry in the book list page.
    let booksList = document.querySelector("#booksBody");
    if (booksList) {
        booksList.querySelectorAll("tr").forEach(function(row) {
            let title = row.querySelector(".title").innerText;
            let author = row.querySelector(".author").innerText;
            let viewLink = row.querySelector(".viewLinkWrapper");
            viewLink.insertAdjacentHTML('afterend', `<a class="actionLinkLite viewLink nobreak" href="https://kcls.bibliocommons.com/v2/search?searchType=smart&query=${title}+${author}" target="_blank">KCLS »</a>`);
        });
    }

})();
