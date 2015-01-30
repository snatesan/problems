/*Implement a function to check if a linked list is a palindrome*/
"use strict";

function isPalindromeListWithStack(head) {
	var slow = head,
		fast = head,
		stack = [];

	if(!head) {
		return false;
	}

	while(fast && fast.next) {
		stack.push(slow.data);
		slow = slow.next;
		fast = fast.next.next;
	}

	if(fast) { //odd length
		slow = slow.next;
	}

	while(slow) {
		if(slow.data !== stack.pop()) {
			return false;
		} 
		slow = slow.next;
	}

	return true;
}

function isPalindromeListRecursive(head, length) {
	if(!head || length === 0) {
		return { next: null, isPal: false };
	} else if(length == 1) {//odd length
		return { next: head.next, isPal: true };
	} else if(length == 2) {
		return { next: head.next.next, isPal: head.data == head.next.data };
	} else {
		var result = isPalindromeListRecursive(head.next, length - 2);

		if(result.isPal) {
			result.isPal = head.data == result.next.data;
			result.next = result.next.next;
			return result;
		} else {
			return result;
		}
	}
}

function getListSize(head) {
	var count = 0;
	while(head) {
		count++;
		head = head.next;
	}

	return count;
}

function isPalindromeList(head) {
	return isPalindromeListRecursive(head, getListSize(head)).isPal;
}

module.exports = {
	isPalindromeListWithStack: isPalindromeListWithStack,
	isPalindromeListRecursive: isPalindromeList
};


