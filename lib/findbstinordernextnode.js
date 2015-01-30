/*Write an algorithm to find the next node (i.e, in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.*/

"use strict";

function findNextNode(node) {
	var parentNode;

	if(!node) {
		return null;
	}

	//if node has right sub tree return lest most child of that sub tree
	if(node.right) {
		return getLeftMostNode(node.right);
	} else {
		//return parent node where the subtree which the node belongs to is a left child
		parentNode = node.parent;
		while(parentNode && parentNode.right == node) {
			node = parentNode;
			parentNode = parentNode.parent;
		}

		return parentNode;
	}
}

function getLeftMostNode(node) {
	if(!node) {
		return null;
	}

	while(node.left) {
		node = node.left;
	}

	return node;
}

module.exports = findNextNode;

