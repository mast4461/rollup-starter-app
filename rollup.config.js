import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import {temperMonkeyScriptHeader} from "./tampermonkey.config";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'public/bundle.js',
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
    },
    plugins: [
      typescript(),
    ],
  },
  {
    input: 'src/tampermonkey-loader.js',
    output: {
      file: 'public/tampermonkey.js',
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      banner: temperMonkeyScriptHeader,
      sourcemap: false,
    },
    plugins: [
      json(),
    ],
  },
];
