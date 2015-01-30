"use strict";

var maxProduct = require("../lib/maxproductinarray");

describe("maximum product with contiguous elements in an array", function() {
	
	it("should return 6 for array [2, 3, -2, 4]", function() {
		maxProduct([2, 3, -2, 4]).should.equal(6);
	});

	it("should return 8 for array [ -2, -4, -2 ]", function() {
		maxProduct([-2, -4, -2]).should.equal(8);
	});

	it("should return 4 for [4, -1, 2, 1]", function() {
		maxProduct([4, -1, 2, 1]).should.equal(4);
	});

});
