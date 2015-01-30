"use strict";

var List = require("../lib/linkedlist"),
	getBeginningOfLoop = require("../lib/findcyclelistloopbeginning");

describe("get beginning of circular linked list loop", function() {

	it("should return node C for A -> B -> C -> D -> E -> C", function() {
		var list = new List();
		list.add("A");
		list.add("B");
		var nodeC = list.add("C");
		list.add("D");
		var nodeE = list.add("E");
		nodeE.next = nodeC;

		getBeginningOfLoop(list.firstNode()).data.should.equal("C");
	});

});
