import {bundleUrls} from "../tampermonkey.config";

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
