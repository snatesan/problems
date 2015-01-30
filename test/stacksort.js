"use strict";

var Stack = require("../lib/stack"),
	sortStack = require("../lib/stacksort");

describe("sort stack", function() {
	it("should return sorted stack for 5 -> 3 -> 1 -> 2 -> 4", function() {
		var stack = new Stack();
		stack.push(5);
		stack.push(3);
		stack.push(1);
		stack.push(2);
		stack.push(4);

		var sorted = sortStack(stack);

		sorted.peek().should.equal(5);
		sorted.pop().should.equal(5);
		sorted.pop().should.equal(4);
		sorted.pop().should.equal(3);
		sorted.pop().should.equal(2);
		sorted.pop().should.equal(1);
		
	});
});
