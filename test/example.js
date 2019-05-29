var test = require('unit.js');

describe('yoboyz', function() {
    it('example', function() {
        let example = 'hello world';
        test
            .string(example)
            .startsWith('hello')
            .match(/[a-z]/)
    })
})
