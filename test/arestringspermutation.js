"use strict";

var isPermutation = require("../lib/arestringspermutation");

describe("given two strings determine whether one is permutation of the other", function() {
	it("should return true for \"god\" and \"dog\"", function() {
		isPermutation("god","dog").should.equal(true);
	});

	it("should return false for \"god\" and \"dog  \"", function() {
		isPermutation("god", "dog  ").should.equal(false);
	});

	it("should return false for \"app\" and \"ppaa\"", function() {
		isPermutation("app", "ppaa").should.equal(false);
	});

	it("should return false for \"appd\" and \"aapd\"", function() {
		isPermutation("appd", "aapd").should.equal(false);
	});
});
