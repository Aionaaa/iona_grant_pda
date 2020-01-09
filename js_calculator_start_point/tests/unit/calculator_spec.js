var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

it('should do addition', function(){
  calculator.previousTotal = 2;
    calculator.add(3);
    let expected = 5;
    assert.strictEqual(calculator.runningTotal, expected)
})

it('should do subtraction', function(){
  calculator.previousTotal = 5;
  calculator.subtract(2);
  let expected = 3;
  assert.strictEqual(calculator.runningTotal, expected)
})

it('should do multiplication', function(){
  calculator.previousTotal = 2;
  calculator.multiply(2);
  let expected = 4;
  assert.strictEqual(calculator.runningTotal, expected)
})

it('should do division', function(){
  calculator.previousTotal = 10;
  calculator.divide(2);
  let expected = 5;
  assert.strictEqual(calculator.runningTotal, expected)
})

it('should be able to concatenate numbers', function(){
  calculator.numberClick(1);
  calculator.numberClick(1);
  let expected = 11;
  assert.strictEqual(calculator.runningTotal, expected)
})

it('should chain multiple operations together', function(){
  calculator.add(1);
  calculator.operatorClick("+");
  calculator.add(1);
  let expected = 2;
  assert.strictEqual(calculator.runningTotal, expected)
})
it('should clear total without affecting calculation', function(){
  calculator.previousTotal = 10;
  calculator.clearClick;
  calculator.numberClick(2);
  calculator.operatorClick("+");
  calculator.numberClick(2);
  calculator.operatorClick("=");
  let expected = 4;
  assert.strictEqual(calculator.runningTotal, expected)
})



});
