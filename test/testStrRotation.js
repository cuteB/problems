let {stringRotate} = require('../arrays/stringRotate.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test String Rotation', function() {
    it('basic', function() {
        let str = "rotation";
        let act = stringRotate(str);
        let exp = "noitator";

        assert.equal(act, exp);
    })

    it('race car', function() {
        let str = "racecar";
        let act = stringRotate(str);
        let exp = "racecar";

        assert.equal(act, exp);
    })

    it('long', function() {
        let str = "aoeuidhtns;qjkxbmwvz";
        let act = stringRotate(str);
        let exp = "zvwmbxkjq;snthdiueoa";

        assert.equal(act, exp);
    })
    it('single', function() {
        let str = "a";
        let act = stringRotate(str);
        let exp = "a";

        assert.equal(act, exp);
})

})
