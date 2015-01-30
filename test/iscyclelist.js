"use strict";

var List = require("../lib/linkedlist.js"),
	iscyclelist = require("../lib/iscyclelist.js");

describe("iscyclelist", function() {

	describe("empty list", function() {
		it("should return false", function() {
			var list = new List();
			iscyclelist(list.firstNode()).should.equal(false);
		});
	});

	describe("single item list", function() {
		it("should return false for acycle 1 - > ", function() {
			var list = new List();
			list.add("1");
			iscyclelist(list.firstNode()).should.equal(false);
		});

		it("should return true for cycle 1 -> 1", function() {
			var list = new List(),
				item = list.add("1");
			item.next = item;
			iscyclelist(list.firstNode()).should.equal(true);
		});
	});

	describe("two item list", function() {
		it("should return false for acycle 1 -> 2 -> ", function() {
			var list = new List();
			list.add(1);
			list.add(2);
			iscyclelist(list.firstNode()).should.equal(false);
		});

		it("should return true for cycle 1 -> 2 -> 1", function() {
			var list = new List(),
				item1 = list.add(1),
				item2 = list.add(2);
			item2.next = item1;
			iscyclelist(list.firstNode()).should.equal(true);
		});
	});

	describe("three item list", function() {
		it("should return false for acycle 1 -> 2 -> 3 ->", function() {
			var list = new List();
			list.add(1);
			list.add(2);
			list.add(3);
			iscyclelist(list.firstNode()).should.equal(false);
		});

		it("should return true for cycle 1 -> 2 -> 3 -> 2", function() {
			var list = new List(),
				item1 = list.add(1),
				item2 = list.add(2),
				item3 = list.add(3);
			item3.next = item2;
			iscyclelist(list.firstNode()).should.equal(true);
		});
	});

	describe("five item list", function() {
		it("should return false for acycle 1 -> 2 -> 3 -> 4 -> 5 ->", function() {
			var list = new List();
			list.add(1);
			list.add(2);
			list.add(3);
			list.add(4);
			list.add(5);
			iscyclelist(list.firstNode()).should.equal(false);
		});

		it("should return true for cycle 1 -> 2 -> 3 -> 4 -> 5 -> 1", function() {
			var list = new List(),
				item1 = list.add(1),
				item2 = list.add(2),
				item3 = list.add(3),
				item4 = list.add(4),
				item5 = list.add(5);
			item5.next = item1;
			iscyclelist(list.firstNode()).should.equal(true);
		});
	});


});



