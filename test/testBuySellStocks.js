let {buySellStocks} = require('../arrays/buySellStocks.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test Buy Sell stocks', function() {
    it('basic', function() {
        let arr = [7, 1, 5, 3, 6, 4];
        let act = buySellStocks(arr);
        let exp = 5;

        assert.equal(act, exp);
    })

    it('short', function() {
        let arr = [1,2];
        let act = buySellStocks(arr);
        let exp = 1;

        assert.equal(act, exp);
    })

    it('one', function() {
        let arr = [1];
        let act = buySellStocks(arr);
        let exp = 0;

        assert.equal(act, exp);
    })

    it('ups and downs', function() {
        let arr = [2,6,8,6,5,1,4];
        let act = buySellStocks(arr);
        let exp = 6;

        assert.equal(act, exp);
    }

    it('null', function() {
        let arr = null;
        let act = buySellStocks(arr);
        let exp = null;

        assert.equal(act, exp);
    })

    it('ups and downs 2', function() {
        let arr = [2,6,8,6,5,1,10];
        let act = buySellStocks(arr);
        let exp = 9;

        assert.equal(act, exp);
    })

    it('long', function() {
        let arr = [65,32,12,14,5,15,23,65,4,44,21,32,56,18,111];
        let act = buySellStocks(arr);
        let exp = 107;


        assert.equal(act, exp);
    })
})
