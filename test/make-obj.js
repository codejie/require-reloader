'use strict'

const fs = require('fs');
const path = require('path');

const fileObj = path.join(__dirname, './obj.js');
const fileCls = path.join(__dirname, './cls.js');

function createObj (obj) {
    if (fs.existsSync(fileObj)) {
        fs.unlinkSync(fileObj);
    }

    const str = '\'use strict\'\n\n' 
        + 'module.exports = '
        + JSON.stringify(obj, null, 2)
        + ';\n';

    fs.writeFileSync(fileObj, str);
}

function createClass (a, b, c) {
    if (fs.existsSync(fileCls)) {
        fs.unlinkSync(fileCls);
    }

    const str = '\'use strict\'\n\n' 
        + 'class C {\n'
        + '\tconstructor () {\n\t\tthis.a = ' + a + ';\n\t}\n'
        + '\tf () {\n'
        + '\t\t return ' + b + ';\n'
        + '\t}\n'
        + (c ? '\tf1 () {\n\t\treturn ' + c + ';\n\t}\n' : '')
        + '}\n\n'
        + 'module.exports = C;\n';

    // console.log('str ===', str);

    fs.writeFileSync(fileCls, str);
}

module.exports.createObj = createObj;
module.exports.createClass = createClass;