// Bring in the chai assertion library, mocha, and app.js file
const {assert} = require('chai');
const { describe, it } = require('mocha');
const app = require('../app');


// Write tests function below this line
describe('fizzBuzz', () => {
    it(`prints 'fizz buzz' when the number is divisible by 3 and 5`, () => {
        //setup
        const input = 15;
        const expectedResult = 'fizz buzz';
        //exercise
        const result = app.fizzBuzz(input);
      
        //verify
        assert.equal(result, expectedResult);
    })
    it(`prints 'fizz' when the number is divisible by 3`, () => {
        //setup
        const input = 6
        const expectedResult = 'fizz';

        //exercise
        const result = app.fizzBuzz(input);

        //verify
        assert.equal(result, expectedResult);
    })
    it(`prints 'buzz' when the number is divisible by 5`, () => {
        //setup
        const input = 10
        const expectedResult = 'buzz';

        //exercise
        const result = app.fizzBuzz(input);

        //verify
        assert.equal(result, expectedResult);
    })
    it(`prints the number when the number is neither divisible by 3 nor by 5`, () => {
        //setup
        const input = 11
        const expectedResult = input;

        //exercise
        const result = app.fizzBuzz(input);

        //verify
        assert.equal(result, expectedResult);
    })
});

describe('isLeapYear', () => {
    it('returns true for centurial leap years, e.g. 2000', () => {
        //setup
        const input = 2000
        const expectedResult = true
      
        //exercise
        const result = app.isLeapYear(input)
      
        //verify
        assert.equal(result, expectedResult)
    })
    it('returns true for pure leap years, e.g. 2004', () => {
        //setup
        const input = 2004
        const expectedResult = true

        //exercise
        const result = app.isLeapYear(input)

        //verify
        assert.equal(result, expectedResult)
    })
    it('returns false for non-centurial leap year centenials, e.g. 1900', () => {
        //setup
        const input = 1900
        const expectedResult = false
      
        //exercise
        const result = app.isLeapYear(input)
      
        //verify
        assert.equal(result, expectedResult)
    })
    it('returns false for other non-leap years, e.g. 2005', () => {
        //setup
        const input = 2005
        const expectedResult = false
      
        //exercise
        const result = app.isLeapYear(input)
      
        //verify
        assert.equal(result, expectedResult)
    })
});
describe('isPerfectSquare', () => {
    it('returns true for perfect squares, such as 4', () => {
        //setup
        const input = 4
        const expectedResult = true
        //exercise
        const result = app.isPerfectSquare(input)
      
        //verify
        assert.equal(result, expectedResult)
    })
    it('returns false for not perfect squares, such as 5', () => {
        //setup
        const input = 5
        const expectedResult = false
      
        //exercise
        const result = app.isPerfectSquare(input)
      
        //verify
        assert.equal(result, expectedResult)
    })
    it('returns true for the 0 case', () => {
        //setup
        const input = 0
        const expectedResult = true
      
        //exercise
        const result = app.isPerfectSquare(input)
      
        //verify
        assert.equal(result, expectedResult)
    })
})