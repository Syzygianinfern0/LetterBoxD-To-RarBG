// ==UserScript==
// @name         Open RARBG with IMDb ID Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Create a button at the top of the page which opens the RARBG page with the IMDb title ID when clicked, instead of directly opening the IMDb link on the page.
// @author       Your name
// @match        https://letterboxd.com/film/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Find the first IMDb link on the page and extract the IMDb title ID
    var imdbTitleId;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.href.includes("imdb.com")) {
            var imdbUrlParts = link.href.split("/");
            imdbTitleId = imdbUrlParts[imdbUrlParts.length - 2];
            break;
        }
    }

    // Create a button to open the RARBG page with the IMDb title ID
    var button = document.createElement("button");
    button.innerHTML = "Open RARBG with IMDb ID";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.zIndex = "9999";
    button.onclick = function () {
        var rarbgUrl = "https://rarbg.to/torrents.php?search=" + imdbTitleId + "&order=seeders&by=DESC";
        window.open(rarbgUrl, "_blank");
    };
    document.body.appendChild(button);
})();
