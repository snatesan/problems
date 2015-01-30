"use strict";

function Stack() {

	var size = 0,
		top;

	function push(data) {
		var node = new Node(data);

		if(top) {
			node.next = top;
		}

		top = node;
		size++;
		return true;
	}

	function pop() {
		if(!top) {
			throw new Error("Stack Empty");
		}

		var data = top.data;
		top = top.next;
		size--;
		return data;
	}

	function peek() {
		if(!top) {
			return null;
		}

		return top.data;
	}

	function isEmpty() {
		return size === 0;
	}

	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.size = function() {
		return size;
	};
	this.isEmpty = isEmpty;

}

function Node(data) {
	return {
		data: data,
		next: null
	};
}

module.exports = Stack;
