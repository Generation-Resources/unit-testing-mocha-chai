// Bring in the chai assertion library and app.js file
const { describe, it } = require('mocha');
const {assert} = require('chai');
const {fizzBuzz, isLeapYear, isPerfectSquare} = require('../app');
// NOTE: destructured importing -- this can save processing speed with large applications or packages so you're only importing the specific functions/methods you need to test


// Write tests for app.js below this line
describe('App', function(){
	describe('fizzBuzz', function(){

		// const fizzBuzz = app.fizzBuzz; //After refactor (destructuring app functions in require method) this defined variable isn't needed
		// This is where you might write any Mocha Hooks if needed

		it('should return fizz in place of multiples of 3', function(){
			// Setup
			const inputNum = 3;
			const expectedResult = 'fizz';

			// Exercise
			const result = fizzBuzz(inputNum);
			// Verify
			assert.strictEqual(expectedResult, result);
			// NOTE: .strictEqual is more expressive than .equal
		})
		it('should return Buzz in place of multiples of 5', function(){
			// Setup
			const inputNum = 5;
			const expectedResult = 'buzz';

			// Exercise
			const result = fizzBuzz(inputNum);
			// Verify
			assert.strictEqual(expectedResult, result);
		})
		it('should return fizzBuzz in place of multiples of both 3 and 5', function(){
			// Setup
			const inputNum = 15;
			const expectedResult = 'fizz buzz';

			// Exercise
			const result = fizzBuzz(inputNum);
			// Verify
			assert.strictEqual(expectedResult, result);
		})
		it('should return the number when the value is not a multiple of 3 or 5', function(){
			// Setup
			const inputNum = 2
			const expectedResult = 2;

			// Exercise
			const result = fizzBuzz(inputNum);
			// Verify
			assert.strictEqual(expectedResult, result);
		})
	})

	describe('isLeapYear', function(){

		// const isLeapYear = app.isLeapYear; //After refactor (destructuring app functions in require method) this defined variable isn't needed
		// This is where you might write any Mocha Hooks if needed

		it('should return TRUE if it is a centurial leapyear (divisible by 100 and 4)', function(){
			// Setup
			const inputYear = 1600;
			const expectedResult = true;

			// Exercise
			const result = isLeapYear(inputYear);
			// Verify
			assert.equal(expectedResult, result);
		})
		it('should return FALSE if the year is divisible by 100 and not divisible by 4', function(){
			// Setup
			const inputYear = 1800;
			const expectedResult = false;

			// Exercise
			const result = isLeapYear(inputYear);
			// Verify
			assert.equal(expectedResult, result);
		})
		it('should return TRUE if it is a pure leap year (divisible by 4)', function(){
			// Setup
			const inputYear = 2020;
			const expectedResult = true;

			// Exercise
			const result = isLeapYear(inputYear);
			// Verify
			assert.equal(expectedResult, result);
		})
		it('should return FALSE if the year is a not divisible by 4', function(){
			// Setup
			const inputYear = 2025;
			const expectedResult = false;

			// Exercise
			const result = isLeapYear(inputYear);
			// Verify
			assert.strictEqual(expectedResult, result);
		})

	})

	describe('isPerfectSquare', function(){

		// const isPerfectSquare = app.isPerfectSquare; //After refactor (destructuring app functions in require method) this defined variable isn't needed
		// This is where you might write any Mocha Hooks if needed

		it('should return TRUE if the number is a perfect square', function(){
			// Setup
			const inputPossibleSquare = 144;
			const expectedResult = true;

			// Exercise
			const result = isPerfectSquare(inputPossibleSquare);
			// Verify
			assert.equal(expectedResult, result);
		})
		it('should return FALSE if the number is not a perfect square', function(){
			// Setup
			const inputPossibleSquare = 50;
			const expectedResult = false;

			// Exercise
			const result = isPerfectSquare(inputPossibleSquare);
			// Verify
			assert.equal(expectedResult, result);
		})
	})
})
