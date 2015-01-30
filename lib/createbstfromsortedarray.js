/*Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height */

"use strict";

var TreeNode = require("./treenode");

function createBSTFromSortedArray(arr, start, end) {
	var len = arr.length,
		midIndex,
		root;

	start = start === undefined ? 0 : start;
	end = end === undefined ? len - 1 : end;

	if(end < start) {
		return null;
	}

	midIndex = Math.floor( (start + end)/2 );
	root = new TreeNode(arr[midIndex]);

	root.left = createBSTFromSortedArray(arr, start, midIndex - 1);
	root.right = createBSTFromSortedArray(arr, midIndex + 1, end);

	return root;
}

module.exports = function(arr) {
	return createBSTFromSortedArray(arr);
};
