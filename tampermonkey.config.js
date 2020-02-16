import packageJson from "./package.json";

// The URL at which the tampermonkey script fetches your desired scripts
export const bundleUrls = [
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js", // Remote third party scripts
  "https://raw.githubusercontent.com/user/my-repo/master/public/bundle.js?raw=true", // Your own
];

// Get the details for your own tampermonkey script header by creating a new script
// in Tampermonkey and copying the header. The value for the "@match" field is
// particularly important.
export const temperMonkeyScriptHeader = 
`// ==UserScript==
// @name         ${packageJson.name}
// @namespace    http://tampermonkey.net/
// @version      (See remote script)
// @description  ${packageJson.description}
// @match        INSERT YOUR MATCH STRING HERE
// @grant        none
// ==/UserScript==

// Userscript for Tampermonkey (https://www.tampermonkey.net/)
// that loads and executes a remote script.`;
