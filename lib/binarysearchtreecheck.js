/*Given a binary tree, check whether it’s a binary search tree or not. - See more at: http://www.ardendertat.com/2011/10/10/programming-interview-questions-7-binary-search-tree-check/#sthash.pqseon8o.dpuf*/

"use strict";

function isBST(node, max, min) {
	if(max === undefined) {
		max = Number.POSITIVE_INFINITY;
	}

	if(min === undefined) {
		min = Number.NEGATIVE_INFINITY;
	}

	if(!node) {
		return true;
	}

	var val = node.value;

	if(min <= val && max >= val) {
		return isBST(node.left, val, min) && isBST(node.right, max, min);
	} else {
		return false;
	}
}

function isBST2(node, lastVal) {
	if(!node) {
		return true;
	}

	if(!lastVal) {
		lastVal = [];
	}

	if(isBST2(node.left, lastVal)) {
		if(node.value < lastVal[0]) {
			return false;
		} 

		lastVal[0] = node.value;

		return isBST2(node.right, lastVal);
	} else {
		return false;
	}
}

module.exports = { isBST1: isBST, isBST2: isBST2 };
		
