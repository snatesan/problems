"use strict";
/*You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
Example 
	input: (7 -> 1 -> 6) + (5 -> 9 -> 2) that is 617 + 295
	output: 2 -> 1 -> 9 that is 912
*/

function addListNumbers(numlist1, numlist2) {
	var num1,
		num2;

	if(!numlist1) {
		return numlist2;
	} else if(!numlist2) {
		return numlist1;
	}

	num1 = getNumberFromList(numlist1);
	num2 = getNumberFromList(numlist2);

	var sum = num1 + num2;

	console.log(sum);

	return getListFromNumber(sum);

}

function getNumberFromList(numlist) {
	var pos = 1,
		num = 0;

	while(numlist) {
		num = num + pos * numlist.data;
		pos = pos * 10;
		numlist = numlist.next;
	}
	return num;
}

function getListFromNumber(num) {
	var list,
		head,
		node,
		digit;

	while(num) {
		digit = num % 10;
		num = Math.floor(num / 10);

		node = { data: digit, next: null };

		if(list) {
			list.next = node;
		} else {
			head = node;
		}

		list = node;
	}

	return head;
}

module.exports = addListNumbers;

