/*Design an alogorthim and write code to find the common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: this not necessarily a binary search tree*/

"use strict";

module.exports = {
	parentSolution: findCommonAncestorWithParentProperty,
	noParentSolution: findCommonAncestor
};

/*This solution assumes each node has link to parent */
function findCommonAncestorWithParentProperty(n1, n2) {
	if(n1 == n2) {
		return n1;
	}

	if(!n1 || !n2) {
		return null;
	}

	var h1 = getHeight(n1),
		h2 = getHeight(n2);

	if(h1 > h2) {
		n1 = getAncestor(n1, h1 - h2);
	} else if(h2 > h1) {
		n2 = getAncestor(n2, h2 - h1);
	}

	while(n1 && n2) {
		if(n1 == n2) {
			return n1;
		}
		n1 = n1.parent;
		n2 = n2.parent;
	}

	return null;
}

function getHeight(node) {
	if(!node) {
		return;
	}

	var height = 0;

	while(node) {
		height++;
		node = node.parent;
	}

	return height;
}

function getAncestor(node, level) {
	while(level) {
		level--;
		node = node.parent;
	}

	return node;
}

function findCommonAncestor(root, n1, n2) {
	if(n1 == n2) {
		return n1;
	}

	if(!root || !n1 || !n2) {
		return null;
	}

	var result = findCommonAncestorHelper(root, n1, n2);
	
	if(result.isAncestor) {
		return result.node;
	}

	return null;
}

function findCommonAncestorHelper(root, n1, n2) {
	if(!root) {
		return { node: null, isAncestor: false };
	}

	var rLeft = findCommonAncestorHelper(root.left, n1, n2),
		rRight = findCommonAncestorHelper(root.right, n1, n2);

	if(rLeft.isAncestor) {
		return rLeft;
	}

	if(rRight.isAncestor) {
		return rRight;
	}

	if(rLeft.node && rRight.node) {
		return { node: root, isAncestor: true };
	}

	if(root == n1 || root == n2) {
		return { node: root, isAncestor: rLeft.node || rRight.node ? true : false };
	}

	return { node: rLeft.node ? rLeft.node : rRight.node, isAncestor: false };

}


	
