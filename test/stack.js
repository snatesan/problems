"use strict";

var Stack = require("../lib/stack");

describe("Stack", function() {
	it("should return true for push", function() {
		var stack = new Stack();

		stack.push(2).should.equal(true);

		stack.size().should.equal(1);
	});

	it("should return 2 for pop for stack 1 -> 2", function() {
		var stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.pop().should.equal(2);
		stack.pop().should.equal(1);
		stack.pop.should.throw("Stack Empty");
	});

	it("should return 2 for peek for stack 1 -> 2", function() {
		var stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.peek().should.equal(2);
		stack.size().should.equal(2);
	});

	it("empty stack test", function() {
		var stack = new Stack();
		stack.pop.should.throw("Stack Empty");
	});

});
