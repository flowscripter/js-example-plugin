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

Further details on project configuration files and Javascript version support can be found in 
the [template for this project](https://github.com/flowscripter/ts-template/blob/master/README.md#overview).

## License

MIT © Flowscripter
