# rollup-vue3-typescript-creator3.0-quick-start

 rollup+vue3+typescript template for creator3.0 extension

## Project setup

```
npm install
//OR use cnpm
cnpm install
```

## Usage

### Compiles and minifies for production

```
npm run build
```

### Runs build on each save during development

```
npm run watch
```

### How it works

Parse `package.json` for input to rollup via `build-utils\rollup-config-utils.js`.

The different packaging configurations via `npm run build` and `npm run watch` are shown in the table below

| Role                                                     | Plugin Name                  | Development(`npm run watch`) | release(`npm run build`) |
  | --------------------------------------------------------- | --------------------------- | --------- | --------------- |
  | `ES6` syntax => `ES5` syntax                                    | @rollup/plugin-babel        | √         | √               |
  | Parse `typescript`                                         | rollup-plugin-typescript2   | √         | √               |
  | Copy the contents of the `public` folder to `dist`                     | rollup-plugin-copy          | √         | √               |
  | Make rollup use third-party modules from `node_modules`                          | @rollup/plugin-node-resolve | √         | √               |
  | Parse `.vue` files for `css` and organize all `css` in `dist/panels/css`     | rollup-plugin-postcss       | √         | √               |
  | Convert `CommonJS` to `ES2015` module                        | rollup-plugin-commonjs      | √         | √               |
  | Resolving `vue` files                                           | rollup-plugin-vue           | √         | √               |
  | Uglify script                                             | rollup-plugin-terser        |           | √               |
  | Replace the strings in the file to use the product environment of `vue` (remove all warnings) | @rollup/plugin-replace      |           | √               |

## Reference Documents
 
* [Menu](https://docs.cocos.com/creator/3.0/manual/en/editor/extension/contributions-menu.html) - Click on this link to learn about how to expand the menu.
* [Panel](https://docs.cocos.com/creator/3.0/manual/en/editor/extension/panel.html) - Click on this link to learn more about how to develop panels.

### Build with

[Vue3](https://v3.vuejs.org/) - Click on this link to learn more about "Vue3".
[Vuex](https://next.vuex.vuejs.org/) - Click on this link to learn more about "Vuex".
[Rollup](https://rollupjs.org/guide/en/) - Click on this link to learn more about "Rollup".

### File Directory

```
Root:.
│  .eslintignore
│  .eslintrc.js
│  .gitattributes
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  rollup.config.js
│  tsconfig.json
│  
├─@types
│              
├─@node_modules
│              
├─dist
│  │  index.html
│  │  main.js
│  │  
│  └─panels
│      ├─css
│      │      all.css
│      │      
│      ├─default
│      │      main.js
│      │      
│      └─panel1
│              main.js
│              
├─public
│      index.html
│      
├─src
│  │  main.ts
│  │  panel-utils.ts
│  │  
│  └─panels
│      ├─default
│      │  │  App.vue
│      │  │  main.ts
│      │  │  
│      │  ├─components
│      │  │      my-component.vue
│      │  │      
│      │  └─store
│      │          index.ts
│      │          
│      └─panel1
│          │  App.vue
│          │  main.ts
│          │  
│          ├─components
│          │      my-component1.vue
│          │      
│          └─store
│                  index.ts
│                  
└─build-utils
        rollup-config-utils.js
```

###
