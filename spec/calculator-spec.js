
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

})
