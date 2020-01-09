const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('do number buttons update the display of the running total', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('can chain multiple operations together', function(){
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('14')
    })

     it('can output positive numbers', function(){
       element(by.css('#number2')).click();
       element(by.css('#operator_multiply')).click();
       element(by.css('#number2')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('4')
     })

     it('can output negative numbers', function(){
       element(by.css('#number5')).click();
       element(by.css('#operator_subtract')).click();
       element(by.css('#number6')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('-1')
     })

     it('can output decimal numbers', function(){
       element(by.css('#number9')).click();
       element(by.css('#operator_divide')).click();
       element(by.css('#number2')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('4.5')
     })

     it('can output very large numbers', function(){
       element(by.css('#number8')).click();
       element(by.css('#operator_add')).click();
       element(by.css('#number1')).click();
       element(by.css('#number0')).click();
       element(by.css('#number0')).click();
       element(by.css('#number0')).click();
       element(by.css('#number0')).click();
       element(by.css('#number0')).click();
       element(by.css('#number0')).click();
       element(by.css('#number0')).click();
       element(by.css('#number0')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('100000008')
     })

     it("should return infinity when dividing by zero", function(){
           let running_total = element(by.css("#running_total"));
           element(by.css("#number1")).click();
           element(by.css("#operator_divide")).click();
           element(by.css("#number0")).click();
           element(by.css("#operator_equals")).click();
           expect(running_total.getAttribute("value")).to.eventually.equal("Infinity");
         })




});
