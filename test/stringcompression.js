"use strict";

var compressStr = require("../lib/stringcompression");

describe("returns compressed string based on repeated characters", function() {
	it("should return \"a2b1c5a3\" for input \"aabcccccaaa\"", function() {
		compressStr("aabcccccaaa").should.equal("a2b1c5a3");
	});

	it("should return \"abc\" for input \"abc\"", function() {
		compressStr("abc").should.equal("abc");
	});

});
