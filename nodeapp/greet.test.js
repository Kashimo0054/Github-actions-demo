// greet.test.js

const assert = require('assert');
const greet = require('./greet');

describe('Greet Function', () => {
    it('should return a greeting message', () => {
        const result = greet('Alice');
        assert.strictEqual(result, 'Hello, Alice!');
        console.log('Test passed!'); // Optional: Add this line for output
    });
});
