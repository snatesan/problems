"use strict";

var List = require("../lib/linkedlist"),
	palindromeListFinder = require("../lib/isPalindromeList"),
	isPalindromeListWithStack = palindromeListFinder.isPalindromeListWithStack,
	isPalindromeListRecursive = palindromeListFinder.isPalindromeListRecursive;

describe("linked list a palindrom test with stack solution", function() {
	it("should return true for m -> a -> l -> a -> y -> l -> a -> m", function() {
		var list = new List();
		list.add("m");
		list.add("a");
		list.add("l");
		list.add("a");
		list.add("y");
		list.add("a");
		list.add("l");
		list.add("a");
		list.add("m");

		isPalindromeListWithStack(list.firstNode()).should.equal(true);

	});

	it("should return true for 0 -> 1 -> 2 -> 3 -> 2 -> 1 -> 0", function() {
		var list = new List();
		list.add(0);
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(2);
		list.add(1);
		list.add(0);

		isPalindromeListWithStack(list.firstNode()).should.equal(true);
	});

	it("should return false for null head", function() {
		isPalindromeListWithStack(null).should.equal(false);
	});

	it("should return for a list with only one node", function() {
		var list = new List();
		list.add(0);

		isPalindromeListWithStack(list.firstNode()).should.equal(true);
	});

	it("should return false for 0 -> 1 -> 2", function() {
		var list = new List();
		list.add(0);
		list.add(1);
		list.add(2);

		isPalindromeListWithStack(list.firstNode()).should.equal(false);
	});

	it("should return false for m -> a", function() {
		var list = new List();
		list.add("m");
		list.add("a");

		isPalindromeListWithStack(list.firstNode()).should.equal(false);
	});

	it("should return true for a -> a", function() {
		var list = new List();
		list.add("a");
		list.add("a");

		isPalindromeListWithStack(list.firstNode()).should.equal(true);
	});

});

describe("linked list a palindrom test with recursive solution", function() {
	it("should return true for m -> a -> l -> a -> y -> l -> a -> m", function() {
		var list = new List();
		list.add("m");
		list.add("a");
		list.add("l");
		list.add("a");
		list.add("y");
		list.add("a");
		list.add("l");
		list.add("a");
		list.add("m");

		isPalindromeListRecursive(list.firstNode()).should.equal(true);

	});

	it("should return true for 0 -> 1 -> 2 -> 3 -> 2 -> 1 -> 0", function() {
		var list = new List();
		list.add(0);
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(2);
		list.add(1);
		list.add(0);

		isPalindromeListRecursive(list.firstNode()).should.equal(true);
	});

	it("should return false for null head", function() {
		isPalindromeListRecursive(null).should.equal(false);
	});

	it("should return for a list with only one node", function() {
		var list = new List();
		list.add(0);

		isPalindromeListRecursive(list.firstNode()).should.equal(true);
	});

	it("should return false for 0 -> 1 -> 2", function() {
		var list = new List();
		list.add(0);
		list.add(1);
		list.add(2);

		isPalindromeListRecursive(list.firstNode()).should.equal(false);
	});

	it("should return false for m -> a", function() {
		var list = new List();
		list.add("m");
		list.add("a");

		isPalindromeListRecursive(list.firstNode()).should.equal(false);
	});

	it("should return true for a -> a", function() {
		var list = new List();
		list.add("a");
		list.add("a");

		isPalindromeListRecursive(list.firstNode()).should.equal(true);
	});

});

