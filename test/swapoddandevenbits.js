"use strict";

var swapOddAndEvenBits = require("../lib/swapoddandevenbits");

describe("swap odd and even bits in a number", function() {
	it("should return 10 for 5", function() {
		swapOddAndEvenBits(parseInt("101", 2)).should.equal(parseInt("1010", 2));
	});

	it("should return 0101010101010101010101010101 for 1010101010101010101010101010", function() {
		var num = swapOddAndEvenBits(parseInt("1010101010101010101010101010", 2));
		num.should.equal(parseInt("0101010101010101010101010101", 2));
	});
});
