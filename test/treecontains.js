"use strict";

var treeContains = require("../lib/treecontains");

describe("contains tree test", function() {
	it("should return true for t1 { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } } and t2 { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } because t2 is subtree of t1", function() {
		var t1 = { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } },
			t2 = { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } };

		treeContains(t1, t2).should.equal(true);
	});

	it("should return false for t1 { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } } and t2 { value: 12, left: { value: 10, left: { value: 7}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } }", function() {
		var t1 = { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } },
			t2 = { value: 12, left: { value: 10, left: { value: 7}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } };

		treeContains(t1, t2).should.equal(false);
	});

});
	
