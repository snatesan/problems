"use strict";

var List = require("../lib/linkedlist"),
	kthLastElement = require("../lib/kthlastelement"),
	assert = require("assert");

describe("kth last element of a singly linked list", function() {
	it("should return node with value 2 for linked list 1 -> 2 -> 3 with k = 2", function() {
		var list = new List();
		list.add(1);
		list.add(2);
		list.add(3);
		kthLastElement(list.firstNode(), 2).data.should.equal(2);
	});

	it("should return node with value 3 for linked list 1 -> 2 -> 3 with k = 1", function() {
		var list = new List();
		list.add(1);
		list.add(2);
		list.add(3);
		kthLastElement(list.firstNode(), 1).data.should.equal(3);
	});

	it("should return node with value 1 for linked list 1 -> 2 -> 3 with k = 3", function() {
		var list = new List();
		list.add(1);
		list.add(2);
		list.add(3);
		kthLastElement(list.firstNode(), 3).data.should.equal(1);
	});

	it("should return null for linked list 1 -> 2 -> 3 with k = 4", function() {
		var list = new List();
		list.add(1);
		list.add(2);
		list.add(3);
		assert.ok(!kthLastElement(list.firstNode(), 4));
	});
});
