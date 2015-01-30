"use strict";

var largestContinousSum = require("../lib/continouslargestsum.js");

describe("Largest Continous Sum", function() {

	it("should return 5 for [5]", function() {
		largestContinousSum([5]).should.equal(5);
	});

	it("should return 50 for [1, 2, 10, 20, 15, 2]", function() {
		largestContinousSum([1, 2, 10, 20, 15, 2]).should.equal(50);
	});

	it("should return -2 for [-2]", function() {
		largestContinousSum([-2]).should.equal(-2);
	});

	it("should return 7 for [ 3, 4, -8, -2, 5]", function() {
		largestContinousSum([ 3, 4, -8, -2, 5]).should.equal(7);
	});

	it("shuld return -1 for [-5, -8, -1, -6, -2]", function() {
		largestContinousSum([-5, -8, -1, -6, -2]).should.equal(-1);
	});
});
