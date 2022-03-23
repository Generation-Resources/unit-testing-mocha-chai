// Bring in the chai assertion library, mocha, and app.js file
const {assert} = require('chai');
const { describe, it } = require('mocha');
const app = require('../app');
const{isPerfectSquare} = require('../app')
//setup
// const isPrefectSquare = require('../app');
// Write tests function below this line

describe('isPerfectSquare',()=>{
    
    it('returns true if the number is a perfect square',()=>{
        //setup
        const num = 7;
        const result  = false;
        //excercise

        //verify 
        assert.ok(isPerfectSquare(num) === result);
})
})