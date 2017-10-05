'use strict'

const assert = require('assert');

const Wrapper = require('../').load('obj', './test/obj.js');
const maker = require('./make-obj');

maker.createClass(2, 2, 4);

describe('test Object', () => {
    before(() => {
        maker.createObj({
            a: 1
        });
        Wrapper.reload('obj');
    });

    after(() => {
        maker.createObj({
            a: 1
        });
    });

    it('get a == 1 and should be passed.', () => {
        assert.equal(1, Wrapper.obj.a);
    });
    it('re-write \'obj.js\', and should get a == 2.', () => {
        maker.createObj({
            a: 2
        });
        Wrapper.reload('obj');
        assert.equal(2, Wrapper.obj.a);
    });
    it('set \'b : 3\' into \'obj.js\', and should get a == 2, b == 3.', () => {
        maker.createObj({
            a: 2,
            b: 3
        });
        Wrapper.reload('obj');
        assert.equal(2, Wrapper.obj.a);
        assert.equal(3, Wrapper.obj.b);
    });
});

describe('test Class', () => {
    let a = null;
    before(() => {
        maker.createClass(1, 2);
        Wrapper.load('cls', './test/cls.js');
    });

    after(() => {
        maker.createClass(1, 2);
    });

    it('get a == 1, f() == 2 and should be passed.', () => {
        a = new Wrapper.cls();
        assert.equal(1, a.a);
        assert.equal(2, a.f());
    });
    it('re-write \'cls.js\', set a = 3, f() = 4 and f1() = 5.', () => {
        maker.createClass(3, 4, 5);
        Wrapper.reload('cls');
        const b = new Wrapper.cls();
        assert.equal(3, b.a);
        assert.equal(4, b.f());
        assert.equal(5, b.f1());
    });
    it('the previous object should not been changed.', () => {
        assert.equal(1, a.a);
        assert.equal(2, a.f());
        assert.equal(false, a.hasOwnProperty('f1'));
    });    
});