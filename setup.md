- npm init -y
- npm install webpack webpack-cli --save-dev
- npm install typescript ts-loader --save-dev
- make dist and src folders
- add index.html to dist folder
    - add `<script src="bundle.js"></script> ` just before the closing body tag
- add index.ts to src folder
- tsc --init
    - `"moduleResolution": "node"` 
    - `"module": "ES6",`
    - `"sourceMap": true,`   
    - `"outDir": "./dist",`
    - `"allowJs": true,`
    - Our basic TS settings:
    - `"noEmitOnError": true,`
    - `"noImplicitAny": true,`
    - `"noUnusedLocals": true,`
    - `"noUnusedParameters": true,`
    - `"noImplicitReturns": true,`
    - `"noImplicitOverride": true,`

- configure Webpack with Typescript
    - https://webpack.js.org/guides/typescript/
- npm install npm-run-all live-server --save-dev
- edit package.json
    - ```
"scripts": {
"start": "npm run bundle && npm-run-all --parallel watch serve",
"test": "echo \"Error: no test specified\" && exit 1",
"watch": "webpack --watch",
"serve": "cd dist && live-server",
"bundle": "webpack"
}
  ```

