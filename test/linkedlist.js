"use strict";

var List = require("../lib/linkedlist.js");

describe("linkedlist", function() {
	
	it("instance has add, firstNode and remove methods", function() {
		var list = new List(),
			methods = { "add": 1, "firstNode": 1, "remove": 1, "removeFirstNode": 1 },
			result = {};

		for(var i in list) {
			if(list.hasOwnProperty(i)) {
				result[i] = 1;
			}
		}

		result.should.eql(methods);
	});

	it("add method accepts data and adds it to the end of the list and returns added node", function() {
		var list = new List();

		var node = list.add(2);

		node.data.should.equal(2);
	});

	it("firstNode returns head", function() {
		var list = new List();

		list.add(1);
		list.add(2);

		list.firstNode().data.should.equal(1);
	});

	describe("remove method accepts data and removes all nodes with that data", function() {
		it("should change head when head is removed", function() {
			var list = new List();

			list.add(1);
			list.add(2);

			var isRemoved = list.remove(1);

			isRemoved.should.equal(true);

			list.firstNode().data.should.equal(2);
		});

		it("should remove multiple nodes with same data", function() {
			var list = new List();

			list.add(1);
			list.add(2);
			list.add(5);
			list.add(5);
			list.add(3);

			var isRemoved = list.remove(5);

			isRemoved.should.equal(true);

			var node = list.firstNode();

			var result = "";

			while(node) {
				result += node.data;
				node = node.next;
			}

			result.should.equal("123");
		});

	});

	it("removeFirstNode removes head", function() {
		var list = new List();

		list.add(1);
		list.add(2);
		list.add(3);

		list.removeFirstNode().data.should.equal(1);
	});

});
