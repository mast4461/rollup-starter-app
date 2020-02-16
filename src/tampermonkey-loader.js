import {scriptUrls} from "../tampermonkey.config";

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
