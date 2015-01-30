"use strict";

var FloatToBinaryString = require("../lib/floattobinarystring"),
	floatToBinaryString1 = FloatToBinaryString.floatToBinaryString1,
	floatToBinaryString2 = FloatToBinaryString.floatToBinaryString2;

describe("Given a real number between 0 and 1 (e.g 0.72), print the binary representation using approach one", function() {
	it("should return 0.1011100001010001111010111000010100011110101110000101 for input 0.72", function() {
		floatToBinaryString1(0.72).should.equal((0.72).toString(2));
	});
});


describe("Given a real number between 0 and 1 (e.g 0.72), print the binary representation using approach two", function() {
	it("should return 0.1011100001010001111010111000010100011110101110000101 for input 0.72", function() {
		floatToBinaryString2(0.72).should.equal((0.72).toString(2));
	});
});
