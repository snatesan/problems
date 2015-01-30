"use strict";

var verifyCombinationString = require("../lib/combinetwostrings");

describe("verify two string combination", function() {
	
	it("should return false if one of the input is not valid", function() {
		verifyCombinationString("abc", undefined, "dabecf").should.equal(false);
	});

	it("should return false if the length doesn't match", function() {
		verifyCombinationString("ab", "c", "ac").should.equal(false);
	});

	it("should return true for str1=\"abc\", str2=\"def\" and str3=\"dabecf\"", function() {
		verifyCombinationString("abc", "def", "dabecf").should.equal(true);
	});

	it("should return true for  str1=\"ab\", str2=\"def\" and str3=\"dabef\"", function() {
		verifyCombinationString("ab", "def", "dabef").should.equal(true);
	});

	it("should return true for  str1=\"abc\", str2=\"d\" and str3=\"dabc\"", function() {
		verifyCombinationString("abc", "d", "dabc").should.equal(true);
	});

	it("should return false for str1=\"abc\", str2=\"def\" and str3=\"dabcef\"", function() {
		verifyCombinationString("abc", "def", "dabcef").should.equal(false);
	});

});
	
