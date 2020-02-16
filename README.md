# tampermonkey-remote-script-loader

Uses [Tampermonkey](https://www.tampermonkey.net/) to load and run script(s), possibly written in TypeScript, from remote source(s) on a webage.

Example use case: A script that adds a custom control panel (from your own code bundle) on a page you visit often, manipulating the web page with jQuery (loaded from a CDN).

Tampermonkey has built-in functionality for handling script versions and updates, but the alternative approach implemented in this project has some other interesting features:
- Host your actual sript(s) code (apart from the loader) wherever, outside of Tampermonkey.
- No need to interact with Tampermonkey for versions or updates.
- Load multiple remote scripts from different sources.

Based on [rollup-starter-app](https://github.com/rollup/rollup-starter-app).

------------------
## Usage

1. Create a new script in the Tampermonkey dashboard.
   - If you do this at the page where you want to run the script, the initial value for `@match` is set such that the script will run at that page.
2. Update the information in [tampermonkey.config.js](tampermonkey.config.js)
   1. `bundleUrl` should point to where you host your bundled script.
   2. Set the value for `@match` so that the script will run at the proper sites.
3. Modify [src/index.ts](src/index.ts) and other source files, in either JavaScript or TypeScript, to implement the features you need.
4. Build the project (see [Development](#development)).
5. In the Tampermonkey dashboard, replace the content of your newly created script with the contents of [public/tampermonkey.js](public/tampermonkey.js).
6. In your browser, navigate to the page where you want the script to run and Tampermonkey will load your specified scripts on the page.


## Development

Clone this repository and install dependencies

```bash
git clone https://github.com/mast4461/tampermonkey-remote-script-loader
cd tampermonkey-remote-script-loader
yarn
```

`yarn run build` builds the tampermonkey script `public/tampermonkey.js` and the bundle script `public/bundle.js`, along with a sourcemap file for debugging `public/bundle.js.map`.

`yarn start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`yarn run watch` will continually rebuild the application as your source files change.

`yarn run dev` will run `yarn start` and `yarn run watch` in parallel.
