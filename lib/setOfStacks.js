/*SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack( that is, pop() should return the same value ad it would be if there were just a single stack*/

"use strict";

var Stack = require("./stack");

function SetOfStacks(size) {
	var stacks = [],
		currentStack;

	if(!size) {
		throw new Error("stack size required");
	}

	function push(data) {
		if(!currentStack) {
			currentStack = new Stack();
		} else if(currentStack.size() == size) {
			stacks.push(currentStack);
			currentStack = new Stack();
		}

		currentStack.push(data);

		return true;
	}

	function pop() {
		if(!currentStack) {
			throw new Error("Stack Empty");
		}

		var data = currentStack.pop();
		if(currentStack.size() === 0) {
			if(stacks.length) {
				currentStack = stacks.pop();
			} else {
				currentStack = null;
			}
		}

		return data;
	}

	function peek() {
		if(currentStack) {
			return currentStack.peek();
		} else {
			return null;
		}
	}

	this.push = push;
	this.pop = pop;
	this.peek = peek;
}

module.exports = SetOfStacks;
