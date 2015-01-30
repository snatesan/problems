"use strict";

var bstCheck = require("../lib/binarysearchtreecheck"),
	isBST = bstCheck.isBST1,
	isBST2 = bstCheck.isBST2;

describe("binary search tree check", function() {
	it("should return false for { value: 3, left: { value: 2, left: { value: 1}, right: {value: 4 } }, right: {value: 5} }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1}, right: {value: 4 } }, right: {value: 5} };

		isBST(tree).should.equal(false);
	});

	it("should return true for { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, right: {value: 5} } }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, right: {value: 5} } };

		isBST(tree).should.equal(true);
	});

	it("should return true for { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 5, left: {value: 4} } }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 5, left: {value: 4} } };

		isBST(tree).should.equal(true);
	});

	it("should return false for { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, left: {value: 5} } }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, left: {value: 5} } };

		isBST(tree).should.equal(false);
	});


});


describe("binary search tree check via inorder traversal", function() {
	it("should return false for { value: 3, left: { value: 2, left: { value: 1}, right: {value: 4 } }, right: {value: 5} }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1}, right: {value: 4 } }, right: {value: 5} };

		isBST2(tree).should.equal(false);
	});

	it("should return true for { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, right: {value: 5} } }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, right: {value: 5} } };

		isBST2(tree).should.equal(true);
	});

	it("should return true for { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 5, left: {value: 4} } }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 5, left: {value: 4} } };

		isBST2(tree).should.equal(true);
	});

	it("should return false for { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, left: {value: 5} } }", function() {
		var tree = { value: 3, left: { value: 2, left: { value: 1} }, right: {value: 4, left: {value: 5} } };

		isBST2(tree).should.equal(false);
	});


});
