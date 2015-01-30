/*You have two very large binary trees: T1 with millions of nodes and T2 with hundreds of nodes. Create an algorithm to decide if T2 is a subtree of T1. */

"use strict";

function treeContains(t1, t2) {
	if(t1 === t2) {
		return true;
	}

	if(!t1) {
		return false;
	}

	if(!t2) {
		return true;
	}

	return subTreeCheck(t1, t2);

}

function subTreeCheck(t1, t2) {
	if(t1 === t2) {
		return true;
	}

	if(!t1) {
		return false;
	}

	if(t1.value == t2.value) {
		if(matchTree(t1, t2)) {
			return true;
		}
	}

	return subTreeCheck(t1.left, t2) || subTreeCheck(t1.right, t2);
}

function matchTree(t1, t2) {
	if(t1 === t2) {
		return true;
	}

	if(!t1 || !t2) {
		return false;
	}

	if(t1.value == t2.value) {
		return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right);
	} else {
		return false;
	}
}

module.exports = treeContains;
