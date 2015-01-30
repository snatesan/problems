"use strict";

var api = require("../lib/bitswaprequired"),
	bitSwapRequired = api.bitSwapRequired,
	bitSwapRequiredBetter = api.bitSwapRequiredBetter;

describe("number of bits need to flip to convert number A to number B", function() {
	describe("solution1", function() {
		it("should return 0 to convert number A to number A", function() {
			bitSwapRequired(29, 29).should.equal(0);
		});

		it("should return 2 to convert 29 to 15", function() {
			bitSwapRequired(29, 15).should.equal(2);
		});

		it("should return 2 to convert 15 to 29", function() {
			bitSwapRequired(15, 29).should.equal(2);
		});

		it("should return 5 to convert 682 to 0", function() {
			bitSwapRequired(682, 0).should.equal(5);
		});

		it("should return 5 to convert 0 to 682", function() {
			bitSwapRequired(0, 682).should.equal(5);
		});
	});
	describe("better solution", function() {
		it("should return 0 to convert number A to number A", function() {
			bitSwapRequiredBetter(29, 29).should.equal(0);
		});

		it("should return 2 to convert 29 to 15", function() {
			bitSwapRequiredBetter(29, 15).should.equal(2);
		});

		it("should return 2 to convert 15 to 29", function() {
			bitSwapRequiredBetter(15, 29).should.equal(2);
		});

		it("should return 5 to convert 682 to 0", function() {
			bitSwapRequiredBetter(682, 0).should.equal(5);
		});

		it("should return 5 to convert 0 to 682", function() {
			bitSwapRequiredBetter(0, 682).should.equal(5);
		});
	});

});
