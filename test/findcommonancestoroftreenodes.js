"use strict";

var findCommonAncestor = require("../lib/findcommonancestoroftreenodes"),
	findCommonAncestorWithParentProperty = findCommonAncestor.parentSolution,
	findCommonAncestorNoParentProperty = findCommonAncestor.noParentSolution,
	TreeNode = require("../lib/treenode");


describe("find common ancestor of given tree nodes provoded each node has link to its parent", function() {
	it("should return node 8 for node 2 and node 12 in tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() { 
		var tree = createSampleTreeWithParent();

		findCommonAncestorWithParentProperty(tree.node4, tree.node3).value.should.equal(8);
	});

	it("should return node 4 for node 1 and node 5 in tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() { 
		var tree = createSampleTreeWithParent();

		findCommonAncestorWithParentProperty(tree.node8, tree.node10).value.should.equal(4);
	});

	it("should return null for node 1 and non existing node 20 in tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() { 
		var tree = createSampleTreeWithParent(),
			root = new TreeNode(9),
			node1 = new TreeNode(20);

		root.right = node1;
		node1.parent = root;

		(findCommonAncestorWithParentProperty(tree.node8, node1) === null).should.equal(true);
	});

});

describe("find common ancestor of given tree nodes with no parent link", function() {
	it("should return node 8 for node 2 and node 12 in tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() { 
		var tree = createSampleTreeWithParent();

		findCommonAncestorNoParentProperty(tree.node1, tree.node4, tree.node3).value.should.equal(8);
	});

	it("should return node 4 for node 1 and node 5 in tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() { 
		var tree = createSampleTreeWithParent();

		findCommonAncestorNoParentProperty(tree.node1, tree.node8, tree.node10).value.should.equal(4);
	});

	it("should return null for node 1 and non existing node 20 in tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() { 
		var tree = createSampleTreeWithParent(),
			root = new TreeNode(9),
			node1 = new TreeNode(20);

		root.right = node1;
		node1.parent = root;

		(findCommonAncestorNoParentProperty(tree.node1, tree.node8, node1) === null).should.equal(true);
	});

});

function createSampleTreeWithParent() {
	var node1 = new TreeNode(8),
		node2 = new TreeNode(4),
		node3 = new TreeNode(12),
		node4 = new TreeNode(2),
		node5 = new TreeNode(6),
		node6 = new TreeNode(10),
		node7 = new TreeNode(14),
		node8 = new TreeNode(1),
		node9 = new TreeNode(3),
		node10 = new TreeNode(5),
		node11 = new TreeNode(7),
		node12 = new TreeNode(9),
		node13 = new TreeNode(11),
		node14 = new TreeNode(13),
		node15 = new TreeNode(15);

	node1.left = node2;
	node1.right = node3;
	node2.parent = node1;
	node3.parent = node1;

	node2.left = node4;
	node2.right = node5;
	node4.parent = node2;
	node5.parent = node2;

	node3.left = node6;
	node3.right = node7;
	node6.parent = node3;
	node7.parent = node3;

	node4.left = node8;
	node4.right = node9;
	node8.parent = node4;
	node9.parent = node4; 

	node5.left = node10;
	node5.right = node11;
	node10.parent = node5;
	node11.parent = node5;

	node6.left = node12;
	node6.right = node13;
	node12.parent = node6;
	node13.parent = node6;

	node7.left = node14;
	node7.right = node15;
	node14.parent = node7;
	node15.parent = node7;

	return { node1: node1, node2: node2, node3: node3,
			node4: node4, node5: node5, node6: node6,
			node7: node7, node8: node8, node9: node9,
			node10: node10, node11: node11, node12: node12,
			node13: node13, node14: node14, node15: node15
		};

}
