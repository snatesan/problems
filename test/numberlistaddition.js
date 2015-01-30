"use strict";

var List = require("../lib/linkedlist"),
	addListNumbers = require("../lib/numberlistaddition");

describe("adding two numbers represented in single linked list", function() {
	it("should return 2 -> 1 -> 9 for input 7 -> 1 -> 6 and 5 -> 9 -> 2", function() {
		var list1 = new List(),
			list2 = new List();

		list1.add(7);
		list1.add(1);
		list1.add(6);

		list2.add(5);
		list2.add(9);
		list2.add(2);

		addListNumbers(list1.firstNode(), list2.firstNode()).should.eql({data: 2, next: { data: 1, next: { data: 9, next: null } } });
	});
});
		
