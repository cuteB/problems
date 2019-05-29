let {buySellStocks} = require('../buySellStocks.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test Buy Sell stocks', function() {
    it('basic', function() {
        let arr = [7, 1, 5, 3, 6, 4];
        let act = buySellStocks(arr);
        let exp = 5;

        assert.equal(act, exp);
    })

    it('increasing', function() {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        let act = buySellStocks(arr);
        let exp = 9;

        assert.equal(act, exp);
    })

    it('decreasing', function() {
        let arr = [10,9,8,7,6,5,4,3,2,1];
        let act = buySellStocks(arr);
        let exp = 0;

        assert.equal(act, exp);
    })

    it('ups and downs', function() {
        let arr = [2,6,8,6,5,1,4];
        let act = buySellStocks(arr);
        let exp = 6;

        assert.equal(act, exp);
    })

    it('ups and downs 2', function() {
        let arr = [2,6,8,6,5,1,10];
        let act = buySellStocks(arr);
        let exp = 9;

        assert.equal(act, exp);
    })

    it('last increase', function() {
        let arr = [9,8,7,6,5,4,5];
        let act = buySellStocks(arr);
        let exp = 1

        assert.equal(act, exp);
    })
})
