"use strict";

var createBSTFromSortedArray = require("../lib/createbstfromsortedarray"),
	isBST = require("../lib/binarysearchtreecheck").isBST2,
	util = require("util");

describe("binary search tree from a sorted (ascending order) array", function() {
	it("test for odd length array", function() {
		var arr = [0, 1, 2, 3, 4, 5, 6],
			root = createBSTFromSortedArray(arr);

		isBST(root).should.equal(true);
	});

	it("test for even length array", function() {
		var arr = [0, 1, 2, 3, 4, 5],
			root = createBSTFromSortedArray(arr);
		isBST(root).should.equal(true);
	});
});
