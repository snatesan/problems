"use strict";

var List = require("../lib/linkedlist"),
	partitionList = require("../lib/listpartition");

describe("partition a linked list around a value x", function() {
	
	it("should return 3 -> 1 -> 2 -> 6 -> 7 -> 4 -> 8 for input 3 -> 1 -> 6 -> 7 -> 4 -> 2 -> 8 and x = 4", function() {
		var list = new List();
		list.add(3);
		list.add(1);
		list.add(6);
		list.add(7);
		list.add(4);
		list.add(2);
		list.add(8);

		partitionList(list.firstNode(), 4).should.eql({ data: 3, next : { data: 1, next: { data: 2, next: { data: 6, next: { data: 7, next: { data: 4, next: { data: 8, next: null } } } } } } });
	});
});
