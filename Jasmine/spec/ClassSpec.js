var SimpleCalc = require('../src/simpleCalculator2.js');

var calculator = new SimpleCalc();
describe("Simple Calculator Add Method", function(){
	it("should be able to add two positive numbers.", function(){
	expect(calculator.add(1,2)).toEqual(3);
	});
	it("should be able to handle adding negative numbers.", function(){
	expect(calculator.add(-1,-1)).toEqual(-2);
	});
		
	it("should be able to add multiple positive arguments.", function(){
	expect(calculator.add(1,2,3)).toEqual(6);
	});
	it("should be able to add multiple positive and negative arguments.", function(){
	expect(calculator.add(6,3,-6)).toEqual(3);
	});
	it("should be able to print the LAST answer", function(){
	calculator.add(1,2);
	expect(calculator.last).toBe(3);
	});
	it("should be able to add the LAST answer to new number parameters", function(){
	calculator.add(1,2);
	expect(calculator.add("LAST",3)).toBe(6);
	});
	
});

describe("Simple Calculator Multiply Method.", function(){
	it("should be able to multiply two numbers.", function(){
	expect(calculator.multiply(2,2)).toEqual(4);
	});
	it("should be able to multiply multiple arguments.", function(){
	expect(calculator.multiply(2,2,2,2)).toEqual(16);
	});
	it("should be able to print the LAST answer", function(){
	calculator.multiply(2,2);
	expect(calculator.last).toBe(4);
	});
	it("should be able to multiply the LAST answer along with new numbers", function(){
	calculator.multiply(2,2);
	expect(calculator.multiply("LAST",2)).toEqual(8);
	});
});

describe("Set and Get Slot Methods", function(){
	it("should be able to set a slot for SLOT_1 and SLOT_2 and get each slot", function(){
	calculator.add(1,2);
	calculator.set_slot(1);
	calculator.multiply("LAST",2);
	calculator.set_slot(2);
	expect(calculator.get_slot(1)).toBe(3);
	expect(calculator.get_slot(2)).toBe(6);
	});
});
