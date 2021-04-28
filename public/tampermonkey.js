// ==UserScript==
// @name         tampermonkey-remote-script-loader
// @namespace    http://tampermonkey.net/
// @version      (See remote script)
// @description  Use tampermonkey to load scripts from remote sources.
// @match        https://tankionline.com/play/
// @grant        none
// ==/UserScript==

// Userscript for Tampermonkey (https://www.tampermonkey.net/)
// that loads and executes a remote script.
(function () {
  'use strict';

  // The URL at which the tampermonkey script fetches your desired scripts
  const scriptUrls = [
    "https://raw.githubusercontent.com/poprygo/userscripts/main/src/userscript.js", // Your own script(s)
  ];

  // The body of the Tampermonkey script. Fetches scripts from URLs and adds them to the document in script tags.
  // The scripts are not loaded via the src on a script tag because GitHub has cross origin resource blocking
  // on raw github user content.
  Promise.all(scriptUrls.map(url => fetch(url).then(response => response.text())))
      .then(scriptBodies => scriptBodies.forEach(scriptBody => {
        const scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.text = scriptBody;
        document.body.appendChild(scriptElement);
      }));

}());
