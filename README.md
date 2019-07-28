# js-example-plugin
[![license](https://img.shields.io/github/license/flowscripter/js-example-plugin.svg)](https://github.com/flowscripter/js-example-plugin/blob/master/LICENSE.md)
[![dependencies](https://img.shields.io/david/flowscripter/js-example-plugin.svg)](https://david-dm.org/flowscripter/js-example-plugin)
[![travis](https://api.travis-ci.com/flowscripter/js-example-plugin.svg)](https://travis-ci.com/flowscripter/js-example-plugin)
[![npm](https://img.shields.io/npm/v/@flowscripter/js-example-plugin.svg)](https://www.npmjs.com/package/@flowscripter/js-example-plugin)

> Example JavaScript plugin for the [esm-dynamic-plugins](https://github.com/flowscripter/esm-dynamic-plugins) framework.

## Overview

`ExtensionPointA.js` defines an example extension point ID `EXTENSION_POINT_A_ID`. 
`ExtensionPointB.js` defines an example extension point ID `EXTENSION_POINT_B_ID`. 
In a real world scenario these would likely be imported from a host application API module.

`PluginB.js` provides two extensions: one implementing the Extension Point `EXTENSION_POINT_A_ID` and the
other implementing the Extension Point `EXTENSION_POINT_B_ID`. It also provides the required implementation
of `Plugin` so that the host application can discover it.

Refer to the example [js-example-host-app](https://github.com/flowscripter/js-example-host-app) project for an example host application
which can load and use this plugin. 

Alternatively refer to the example projects [ts-example-host-app](https://github.com/flowscripter/ts-example-host-app) and
[ts-example-plugin](https://github.com/flowscripter/ts-example-plugin) for an example of using TypeScript to define the 
Extension Point interfaces. 
  
## Development

Firstly: 

```
npm install
```

then:

Build: `npm run build`

Watch: `npm run watch`

Lint: `npm run lint`

## Further Details

#### Entry Points for Node and Browser

The build config in `rollup.config.js` produces two bundled entry points:
 
* `index.js` is intended for consumption in node
* `browser.js` - is intended for consumption in a browser

This ensures that dependencies for node specific modules can be shimmed via [rollup-plugin-node-builtins](https://github.com/calvinmetcalf/rollup-plugin-node-builtins)  

To ensure the correct browser version is loaded when accessed from [unpkg.com](https://unpkg.com), 
it is published to npm with a `browser` property in `package.json`.    

#### Configuration
Explanation of project configuration files:

* `.editorconfig` - Configures [EditorConfig](https://editorconfig.org) compliant editors.
* `.eslintrc.js` - [ESLint](https://eslint.org) configuration for the project.
* `.gitignore` - Specifies files for git to [ignore](https://git-scm.com/docs/gitignore). 
* `.huskyrc.js` - Provides git hooks using [Husky](https://github.com/typicode/husky) to enforce semantic commit messages and linting.   
* `.travis.yml` - Defines the [Travis](https://travis-ci.com) build pipeline.
* `commitlint.config.js` - Configures [commitlint](https://conventional-changelog.github.io/commitlint) to ensure commit messages can be used to drive automated [Semantic Version](https://semver.org) releases.
* `package.js` - Defines development cycle scripts and configures publication of ES2015 modules. 
* `release.config.js` - Configuration for automated semantic version releasing using [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
* `renovate.json` - Ensures automated dependency upgrade via [Renovate](https://renovatebot.com) with configuration derived from [@flowscripter/renovate-config](https://www.npmjs.com/package/@flowscripter/renovate-config)
* `rollup.config.js` - Defines the ES2015 module build pipeline for [Rollup](https://rollupjs.org/guide/en)

#### No Legacy JavaScript Support

All source and build output is in ES2015 module form. 

Browsers or NodeJS versions need to support:

* https://github.com/tc39/proposal-dynamic-import
* https://tc39.github.io/ecmascript-asyncawait/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Because of this the modules are configured so that:
 
* no transpiling is performed
* `package.json` specifies:
    * `"main": "dist/index.js`
    * `"type": "module"`
    * `"node": ">=12.6.0"` so that the `--experimental-modules` flag can be used and `"type": "module"` can be specified

#### Legacy Module Consumption
 
Legacy CommonJS format npm packages are supported for internal consumption by `rollup-plugin-commonjs`

## License

MIT © Vectronic
