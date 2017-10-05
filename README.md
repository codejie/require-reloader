# require-reloader
reload required modules without restart the NodeJS program.

require-reloader does `not` watch file changes of Node project, actually it is used by calling reload() in code to reload the required modules.

require-reloader is a `simple` and `non-dependecies` module to reload required modules in runtime way.

## Install

```
npm install --save require-reloader
```

## Usage

```
const Wrapper = require('require-reloader');

Wrapper.load(moduleName, moduleFile)
    moduleName: module name will be used;
    moduleFile: module file to the module, mostly need absolute path of module;

Wrapper.reload(moduleName)
    moduleName: module name will be used;

Wrapper.moduleName
    access the module by moduleName;    

```

## Examples

```js
'use strict'

// init module MyModule
const Wrapper = require('require-reloader').load('MyModule', path.join(__dirname, './my-module.js'));

console.log('aTag = ', Wrapper.MyModule.aTag);

// after my-module.js is re-written 
Wrapper.reload('MyModule');
console.log('aTag = ', Wrapper.MyModule.aTag);

```
Or

```js
const Loader = require('require-reloader');

Loader.load('moduleA', path.join(__dirname, './module-a.js'));
Loader.load('moduleB', path.join(__dirname, './module-b.js'));

Loader.reload('moduleB');

```

## Test

```
> ./node_modules/mocha/bin/mocha test/test.js
```
Or
```
> npm test
```

## License

No License