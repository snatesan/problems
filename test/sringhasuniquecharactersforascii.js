"use strict";

var isUnique = require("../lib/stringhasuniquecharactersforascii");

describe("determine string has all unique characters", function() {
	it("should return true for string \"world\"", function() {
		isUnique("world").should.equal(true);
	});

	it("should return false for string \"hello\"", function() {
		isUnique("hello").should.equal(false);
	});

	it("should return false for string \"\"", function() {
		isUnique("").should.equal(false);
	});

	it("should return true for string \" \"", function() {
		isUnique(" ").should.equal(true);
	});

	it("should return false for string \"  \"", function() {
		isUnique("  ").should.equal(false);
	});

});
