// Bring in the chai assertion library, mocha, and app.js file
const {assert} = require('chai');
const { describe, it } = require('mocha');
const { fizzBuzz, isLeapYear, isPerfectSquare } = require('../app');
const app = require('../app');


// Write tests function below this line
describe('fizzbuzz', () => {
  it('returns a number', () => {

    //setup
    const num = 11;
    const expected = num;
    //exercise
    const result = fizzBuzz(num);
    //verify
    assert.equal(result, expected);
  })

  it('returns fizz when input is divisible by 3', () => {
    //setup
    const num = 12;
    const expected = 'fizz';
    //exercise
    const result = fizzBuzz(num);
    //verify
    assert.equal(result, expected);

  })

  it('returns buzz when input is divisible by 5', () => {
    //setup
    const num = 10;
    const expected = 'buzz';
    //exercise
    const result = fizzBuzz(num);
    //verify
    assert.equal(result, expected);
  })

  it ('returns fizz buzz when input is divisible by 15', () => {
    //setup
    const num = 30;
    const expected = 'fizz buzz';
    //exercise
    const result = fizzBuzz(num);
    //verify
    assert.equal(result, expected);
  })
})

describe('isLeapYear', () => {
  it('returns true if year is a centurial leap year', () => {
    const year = 2000;
    const expected = true;

    const result = isLeapYear(year);

    assert.equal(result, expected);
  })

  it('returns true if year is a pure leap year', () => {
    const year = 2012;
    const expected = true;

    const result = isLeapYear(year);

    assert.equal(result, expected);
  })

  it('returns false if year is a common year', () => {
    const year = 1700;
    const expected = false;

    const result = isLeapYear(year);

    assert.equal(result, expected);
  })
})

describe('isPerfectSquare', () => {
  it('returns true for a perfect square', () => {
    const number = 9;
    const expected = true;

    const result = isPerfectSquare(number);

    assert.equal(result, expected);
  })

  it('returns false for a number that is not a perfect square', () => {
    const number = 10;
    const expected = false;

    const result = isPerfectSquare(number);

    assert.equal(result, expected);
  })
})