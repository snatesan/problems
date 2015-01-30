"use strict";

var getPaths = require("../lib/getpathsintree");

describe("find path in a tree which adds to a given value", function() {
	it("should return paths 8 -> 4, 12 for tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } } and given value 12", function() {
		var tree = { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } },
			sum = 12;

		getPaths(tree, sum).should.eql(["8 -> 4", "12"]);
	});

	it("should return paths 4 -> 6, 10 for tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } } and given value 10", function() {
		var tree = { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } },
			sum = 10;

		getPaths(tree, sum).should.eql(["4 -> 6", "10"]);
	});

});
