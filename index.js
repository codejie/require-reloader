'use strict'

// const path = require('path');

const Wrapper = {

    cache: {},

    load: function (name, file) {
        if (this[name] == undefined) {
            this.cache[name] = file;//path.join(__dirname, file);
            this[name] = require(this.cache[name]);
        }
        return this;
    },
    reload: function (name) {
        if (this[name] != undefined) {
            delete require.cache[this.cache[name]];
            this[name] = require(this.cache[name]);
        }
    }
};

module.exports = Wrapper;