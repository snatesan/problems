"use strict";

var pairSum = require("../lib/pairSum2.js");

describe("Given an integer array, output all pairs that sum up to a specific value k", function() {
	it("should return {1, 3} for an integer array [1, 1, 2, 3, 4] and desired sum 4", function() {
		var out = pairSum([1, 1, 2, 3, 4], 4);

		out.should.eql({ 1: 3 });
	});
});
