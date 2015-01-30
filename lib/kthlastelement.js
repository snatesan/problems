"use strict";

//Implement an algorithm to find the kth last element of a singly linked list

function kthLastElement(head, k) {
	if(!head) {
		return { node: null, index: 0 };
	}

	var result	= kthLastElement(head.next, k),
		index	= result.index;

	index++;
	result.index = index;

	if(index == k) {
		return { node: head, index: index };
	} else {
		return result;
	}
}

function kthLastElementExposed(head, k) {
	var result = kthLastElement(head, k);

	return result.node;
}

module.exports = kthLastElementExposed;
