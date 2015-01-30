/*Implement a function to check if a binary tree is balanced. For the purpose of this question a balanced tree is defined to be a tree such that heights of the two subtrees of any node never differ by more than once */
"use strict";

function isBalancedBinaryTree(node) {
	if(!node) {
		return { isBalanced:  true, height: 0 };
	}

	var leftResult = isBalancedBinaryTree(node.left),
		leftHeight = leftResult.height,
		rightResult = isBalancedBinaryTree(node.right),
		rightHeight = rightResult.height,
		isBalanced = leftResult.isBalanced &&
						rightResult.isBalanced &&
						(Math.abs(leftHeight - rightHeight) <= 1);

	return {
		isBalanced: isBalanced,
		height: isBalanced ? Math.max(leftHeight, rightHeight) + 1 : undefined
	};

}

module.exports = function(node) {
	return isBalancedBinaryTree(node).isBalanced;
};

