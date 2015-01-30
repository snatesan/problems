"use strict";
//Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x

function partitionList(head, val) {
	val = parseInt(val, 10);

	if(!head || isNaN(val)) {
		return head;
	}

	var lessHead,
		greaterHead,
		lessTail,
		greaterTail,
		node,
		next;

	node = head;

	while(node) {
		next = node.next;
		node.next = null;
		
		if(node.data >= val) {
			if(greaterTail) {
				greaterTail.next = node;
			} else {
				greaterHead = node;
			}
			greaterTail = node;
		} else {
			if(lessTail) {
				lessTail.next = node;
			} else {
				lessHead = node;
			}
			lessTail = node;
		}

		node = next;
	}

	if(lessTail) {
		lessTail.next = greaterHead;
		return lessHead;
	} else {
		return greaterHead;
	}
}

module.exports = partitionList;
