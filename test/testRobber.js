let {robHouses} = require('../robber.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test House Robber', function() {
    it('one', function() {
        let arr = [1];
        let act = robHouses(arr);
        let exp = 1;

        assert.equal(act, exp);
    })

    it('two', function() {
        let arr = [1,2];
        let act = robHouses(arr);
        let exp = 2;

        assert.equal(act, exp);
    })

    it('three basic', function() {
        let arr = [1, 3, 1];
        let act = robHouses(arr);
        let exp = 3;

        assert.equal(act, exp);
    })

    it('three increasing', function() {
        let arr = [1, 2, 3];
        let act = robHouses(arr);
        let exp = 4;

        assert.equal(act, exp);
    })

    it('three basic', function() {
        let arr = [2,3,4];
        let act = robHouses(arr);
        let exp = 6;

        assert.equal(act, exp);
    })

    it('4 same', function() {
        let arr = [1,1,1,1];
        let act = robHouses(arr);
        let exp = 2;

        assert.equal(act, exp);
    })

    it('4 basic', function() {
        let arr = [1,2,3,1];
        let act = robHouses(arr);
        let exp = 4;

        assert.equal(act, exp);
    })

    it('4 outside', function() {
        let arr = [2,1,1,3];
        let act = robHouses(arr);
        let exp = 5;

        assert.equal(act, exp);
    })

    it('4 increasing', function() {
        let arr = [1,2,3,4];
        let act = robHouses(arr);
        let exp = 6;

        assert.equal(act, exp);
    })

    it('4 doubles', function() {
        let arr = [1,1,2,2];
        let act = robHouses(arr);
        let exp = 3;

        assert.equal(act, exp);
    })

    it('up', function() {
        let arr = [1,2,3,4,5];
        let act = robHouses(arr);
        let exp = 9;

        assert.equal(act, exp);
    })

    it('down', function() {
        let arr = [5,4,3,2,1];
        let act = robHouses(arr);
        let exp = 9;

        assert.equal(act, exp);
    })

    it('5 2gap', function() {
        let arr = [5,2,3,4,1];
        let act = robHouses(arr);
        let exp = 9;

        assert.equal(act, exp);
    })

    it('5 middles', function() {
        let arr = [1,4,3,5,1];
        let act = robHouses(arr);
        let exp = 9;

        assert.equal(act, exp);
    })

    it('3', function() {
        let arr = [1,9,2];
        let act = robHouses(arr);
        let exp = 9

        assert.equal(act, exp);
    })

    it('gap', function() {
        let arr = [1,9,2,1,10,2];
        let act = robHouses(arr);
        let exp = 19

        assert.equal(act, exp);
    })
})
