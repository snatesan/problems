"use strict";

var isBalancedBinaryTree = require("../lib/isbalancedbinarytree");

describe("balanced binary tree verification", function() {
	it("should return true for tree { data: 0, left: { data: 1 }, right: { data: 2 } }", function() {
		isBalancedBinaryTree({ data: 0, left: { data: 1 }, right: { data: 2 } }).should.equal(true);
	});

	it("should return true for tree { data: 0, left: {data: 1} }", function() {
		isBalancedBinaryTree({ data: 0, left: {data: 1} }).should.equal(true);
	});

	it("should return true for tree { data: 0, right: {data: 1} }", function() {
		isBalancedBinaryTree({ data: 0, right: {data: 1} }).should.equal(true);
	});

	it("should return false for tree { data: 0, left: { data: 1, left: { data: 3, left: { data: 9, left: { data: 13, left: { data: 15 } } } }, right: { data: 5, right: { data: 7 } } }, right: { data: 2, left: {data: 4}, right: {data: 6, right: {data: 8, right: {data: 10, right: { data: 12 } } } } } }", function() {
		isBalancedBinaryTree({ data: 0, left: { data: 1, left: { data: 3, left: { data: 9, left: { data: 13, left: { data: 15 } } } }, right: { data: 5, right: { data: 7 } } }, right: { data: 2, left: {data: 4}, right: {data: 6, right: {data: 8, right: {data: 10, right: { data: 12 } } } } } }).should.equal(false);
	});

	it("should return true for tree { data: 0, left: { data: 1, left: { data: 3, left: { data: 9 }}, right: { data: 5 } }, right: { data: 2, left: {data: 4}, right: {data: 6, right: {data: 8} } } }", function() {
		isBalancedBinaryTree({ data: 0, left: { data: 1, left: { data: 3, left: { data: 9 }}, right: { data: 5 } }, right: { data: 2, left: {data: 4}, right: {data: 6, right: {data: 8} } } }).should.equal(true);
	});

	it("should return false for tree { data: 0, left: { data: 1, left: { data: 3, left: { data: 9 }}, right: { data: 5 } } }", function() {
		isBalancedBinaryTree({ data: 0, left: { data: 1, left: { data: 3, left: { data: 9 }}, right: { data: 5 } } }).should.equal(false);
	});


});
