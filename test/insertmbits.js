"use strict";

var insertMBitsIntoNBits = require("../lib/insertmbits");

describe("Inseet M bits into N bits such that M starts at bit j and ends at bit i", function() {
	it("should return 10001001100 for N = 10000000000, M = 10011, i = 2, j = 6", function() {
		var M = parseInt("10011", 2),
			N = parseInt("10000000000", 2),
			i = 2,
			j = 6;

		insertMBitsIntoNBits(N, M, i, j).toString(2).should.equal("10001001100");
	});

	it("should return 11111001111 for N = 11111111111, M = 10011, i = 2, j = 6", function() {
		var M = parseInt("10011", 2),
			N = parseInt("11111111111", 2),
			i = 2,
			j = 6;

		insertMBitsIntoNBits(N, M, i, j).toString(2).should.equal("11111001111");
	});

});
