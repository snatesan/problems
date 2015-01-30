"use strict";

/*jshint -W030 */

var StackSet = require("../lib/setOfStacks");

describe("set of stacks", function() {
	it("should throw error for no size input", function() {
		StackSet.should.throw("stack size required");
	});

	it("should throw error for pop on empty stack", function() {
		var stackSet = new StackSet(2);

		stackSet.pop.should.throw("Stack Empty");
	});

	it("push pop and peek test", function() {
		var stack = new StackSet(2);

		stack.push(1).should.equal(true);
		stack.push(2).should.equal(true);
		stack.push(3).should.equal(true);

		stack.peek().should.equal(3);
		stack.pop().should.equal(3);
		stack.pop().should.equal(2);
		stack.push(4).should.equal(true);
		stack.push(5).should.equal(true);
		stack.push(6).should.equal(true);
		stack.push(7).should.equal(true);
		stack.push(8).should.equal(true);
		stack.push(9).should.equal(true);
		stack.pop().should.equal(9);
		stack.peek().should.equal(8);
		stack.push(10).should.equal(true);
		stack.pop().should.equal(10);
		stack.pop().should.equal(8);
		stack.pop().should.equal(7);
		stack.pop().should.equal(6);
		stack.pop().should.equal(5);
		stack.pop().should.equal(4);
		stack.pop().should.equal(1);
		(stack.peek() === null).should.be.true;
		stack.push(11).should.equal(true);

	});
});
