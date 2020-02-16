// ==UserScript==
// @name         tampermonkey-remote-script-loader
// @namespace    http://tampermonkey.net/
// @version      (See remote script)
// @description  Use tampermonkey to load scripts from remote sources.
// @match        INSERT YOUR MATCH STRING HERE
// @grant        none
// ==/UserScript==

// Userscript for Tampermonkey (https://www.tampermonkey.net/)
// that loads and executes a remote script.
(function () {
  'use strict';

  // The URL at which the tampermonkey script fetches your desired scripts
  const bundleUrls = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js", // Remote third party scripts
    "https://raw.githubusercontent.com/user/my-repo/master/public/bundle.js?raw=true", // Your own
  ];

  // The body of the Tampermonkey script. Fetches a script from a URL and adds it to the document in a script tag.
  // The script is not loaded via the src on a script tag because GitHub has cross origin resource blocking.
  Promise.all(bundleUrls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(response => response.text())))
    .then(scriptBodies => scriptBodies.forEach(scriptBody => {
      const scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.text = scriptBody;
      document.body.appendChild(scriptElement);
    }));

}());
