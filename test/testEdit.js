let {oneAwayEdit, editNum} = require('../arrays/edit.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test One away edit', function() {
    it('basic', function() {
        let start = "edit";
        let end = "edt";

        let act = oneAwayEdit(start, end);
        let exp = true;
        assert.equal(act, exp);
    })

    it('basic', function() {
        let start = "edit";
        let end = "edit";

        let act = oneAwayEdit(start, end);
        let exp = false;
        assert.equal(act, exp);
    })

    it('2 edits', function() {
        let start = "edit";
        let end = "etid";

        let act = oneAwayEdit(start, end);
        let exp = false;
        assert.equal(act, exp);
    })

    it('add letter', function() {
        let start = "edito";
        let end = "edit";

        let act = oneAwayEdit(start, end);
        let exp = true;
        assert.equal(act, exp);
    })
})

describe('num edit', function() {
    it('basic', function() {
        let start = "edit";
        let end = "edt";

        let act = editNum(start, end);
        let exp = 1;
        assert.equal(act, exp);
    })

    it('two away', function() {
        let start = "edit";
        let end = "edeet";

        let act = editNum(start, end);
        let exp = 2;
        assert.equal(act, exp);
    })

    it('deleted', function() {
        let start = "edit";
        let end = "";

        let act = editNum(start, end);
        let exp = 4;
        assert.equal(act, exp);
    })

    it('new word', function() {
        let start = "";
        let end = "edited";

        let act = editNum(start, end);
        let exp = 6;
        assert.equal(act, exp);
    })
})
