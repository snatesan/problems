/*Implement a MyQueue class which implements a queue using two stacks */

"use strict";

var Stack = require("./stack");

function QueueWithStack() {
	var stack1 = new Stack(),
		stack2 = new Stack();

	function enqueue(data) {
		return stack1.push(data);
	}

	function dequeue() {
		if(stack2.isEmpty()) {
			moveStack1ToStack2();
		} 
		return stack2.pop();
	}

	function peek() {
		if(stack2.isEmpty()) {
			moveStack1ToStack2();
		}
		return stack2.peek();
	}

	function moveStack1ToStack2() {
		while(!stack1.isEmpty()) {
			stack2.push(stack1.pop());
		}
	}

	return  {
		enqueue: enqueue,
		dequeue: dequeue,
		peek: peek
	};

}

module.exports = QueueWithStack;
