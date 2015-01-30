//You are given a linked list with at least one node that is either null-terminated (acyclic) or ends in a cycle(cyclic). Write a function that takes pointer to the head of a list and determines whether the list is cyclic or acyclic. Your function should return false if the list is acyclic and true if it is cyclic. You may not modify the list in any way.

"use strict";

function iscyclelist(head) {
	var slow, fast;
	if(head) {
		slow = head;
		fast = head.next;

		var count = 1;

		while(true) {
			if(!fast || !fast.next) {
				return false;
			} else if(fast == slow || fast.next == slow) {
				return true;
			} else {
				slow = slow.next;
				fast = fast.next.next;
			}
			count++;
		}
	} else {
		return false;
	}
}

module.exports = iscyclelist;


