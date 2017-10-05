# require-reloader
reload required modules without restart the NodeJS program.

require-reloader does `not` watch file changes of Node project, mostly it is used by calling reload() in code to reload the required modules.

## Install

```
npm install --save require-reloader
```

## Usage

```js
'use strict'

// init module moduleName
const Wrapper = require('require-reloader').load('moduleName', './module-file.js');

console.log('aTag = ', Wrapper.moduleName.aTag);

// after module-file.js is re-written 
Wrapper.reload('moduleName');
console.log('aTag = ', Wrapper.moduleName.aTag);

```
Or

```js
const Loader = require('require-reloader');

Loader.load('moduleA', './module-a.js');
Loader.load('moduleB', './module-b.js');

Loader.reload('moduleB');

```

## Test

```
> ./node_modules/mocha/bin/mocha test/test.js
```

## License

No License