let {jumpGame} = require('../jumpGame.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test House Robber', function() {
    it('basic', function() {
        let arr = [2, 3, 1, 1, 4];
        let act = jumpGame(arr);
        let exp = true;

        assert.equal(act, exp);
    })

    it('two', function() {
        let arr = [3, 2, 1, 0, 4];
        let act = jumpGame(arr);
        let exp = false;

        assert.equal(act, exp);
    })

    it('ones', function() {
        let arr = [1, 1, 1, 1 ,1, 1, 1];
        let act = jumpGame(arr);
        let exp = true;

        assert.equal(act, exp);
    })

    it('one', function() {
        let arr = [1];
        let act = jumpGame(arr);
        let exp = true;

        assert.equal(act, exp);
    })

    it('zero', function() {
        let arr = [0];
        let act = jumpGame(arr);
        let exp = false;

        assert.equal(act, exp);
    })

    it('big one first', function() {
        let arr = [10, 0, 0, 0, 0, 0, 0, 0, 0];
        let act = jumpGame(arr);
        let exp = true;

        assert.equal(act, exp);
    })

})
