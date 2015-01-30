/*Write a program to sort a stack in ascending order (with biggest items on top). You may use atmose one addtional stack to hold items, but you may not copy the elements into another data structure (such as an array) */

var Stack = require("./stack");

function sortStack(stack) {
	var buffer = new Stack(),
		data;

	while(!stack.isEmpty()) {
		data = stack.pop();
		while(!buffer.isEmpty() && data < buffer.peek()) {
			stack.push(buffer.pop());
		}
		buffer.push(data);
	}

	return buffer;
}

module.exports = sortStack;

		
