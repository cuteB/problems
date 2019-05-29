let {buySellStocks} = require('../buySellStocks.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test Buy Sell stocks', function() {
    it('basic', function() {
        let arr = [7, 1, 5, 3, 6, 4]
        let act = buySellStocks(arr);
        let exp = 5

        assert.equal(act, exp);
    })
})
