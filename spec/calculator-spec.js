
var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: 'test_reports',
    filePrefix: 'report.xml',
    consolidateAll: true});

 jasmine.getEnv().addReporter(junitReporter)


describe('Calculator', function(){
    var Calculator = require('../Calculator');

    var calculator;

    beforeEach(function(){
        calculator = new Calculator();
    })

    it('Should add two numbers', function(){
        var result = calculator.add(4,5);

        expect(result).toBe(9);
    })

    it('Should subtract two numbers', function(){
        var result = calculator.subtract(10,5);

        expect(result).toBe(5);
    })
    
    describe('CalculatorInside', function(){
    var calculator;

    beforeEach(function(){
        calculatorN = new Calculator();
    })

    it('Should add two numbers_inside', function(){
        var result = calculatorN.add(4,5);

        expect(result).toBe(9);
    })

    it('Should Subtract two numbers_inside', function(){
        var result = calculatorN.subtract(10,5);

        expect(result).toBe(5);
    })

    it('Should Multiply two numbers_inside', function(){
        var result = calculatorN.multiply(10,5);

        expect(result).toBe(55);
    })
})

})
