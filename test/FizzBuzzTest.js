const { FizzBuzz } = require('../src/FizzBuzz');
const { assert } = require('chai');

suite('FizzBuzzTest', function () {

    test('when_called_with_3_should_return_Fizz', function () {
        const value = FizzBuzz.printNumber(3);
        assert.equal(value, 'Fizz');
    });
});