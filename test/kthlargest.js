"use strict";

var kthlargest = require("../lib/kthlargest"),
	assert = require("assert");

describe("kth largest", function() {
	
	it("should return null for null array", function() {
		assert.ok(!kthlargest());	
	});

	it("should null for invalid k", function() {
		assert.ok(!kthlargest([3, 1, 2, 1, 4], 6));
	});

	it("should return 2 for arr [3, 1, 2, 1, 4] and k 3", function() {
		kthlargest([3, 1, 2, 1, 4], 3).should.equal(2);
	});

});
