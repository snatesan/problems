"use strict";

var listFromTree = require("../lib/createlistfromtree"),
	createListFromTreeDFS = listFromTree.dfs,
	createListFromTreeBFS = listFromTree.bfs,
	TreeNode = require("../lib/treenode");

describe("create linked list from tree via dfs approach", function() {
	it("should return list collection [ 8, 4 -> 12, 2 -> 6 -> 10 -> 14, 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13 -> 15 for tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() {
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

		node2.left = node4;
		node2.right = node5;

		node3.left = node6;
		node3.right = node7;

		node4.left = node8;
		node4.right = node9;

		node5.left = node10;
		node5.right = node11;

		node6.left = node12;
		node6.right = node13;

		node7.left = node14;
		node7.right = node15;

		var lists = createListFromTreeDFS(node1);

		lists.length.should.equal(4);

		var list = lists[0],
			head = list.firstNode();

		head.data.value.should.equal(8);
		(head.next === null).should.equal(true);

		list = lists[1];
		head = list.firstNode();

		head.data.value.should.equal(4);
		head.next.data.value.should.equal(12);
		(head.next.next === null).should.equal(true);

		list = lists[2];
		head = list.firstNode();
		head.data.value.should.equal(2);
		head.next.data.value.should.equal(6);
		head.next.next.data.value.should.equal(10);
		head.next.next.next.data.value.should.equal(14);
		(head.next.next.next.next === null).should.equal(true);

		list = lists[3];
		head = list.firstNode();
		head.data.value.should.equal(1);
		head.next.data.value.should.equal(3);
		head.next.next.data.value.should.equal(5);
		head.next.next.next.data.value.should.equal(7);
		head.next.next.next.next.data.value.should.equal(9);
		head.next.next.next.next.next.data.value.should.equal(11);
		head.next.next.next.next.next.next.data.value.should.equal(13);
		head.next.next.next.next.next.next.next.data.value.should.equal(15);
		(head.next.next.next.next.next.next.next.next === null).should.equal(true);


	});
});

describe("create linked list from tree bfs approach", function() {
	it("should return list collection [ 8, 4 -> 12, 2 -> 6 -> 10 -> 14, 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> 13 -> 15 for tree { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: {value: 6, left: {value: 5}, right: {value: 7} } }, right: { value: 12, left: { value: 10, left: { value: 9}, right: {value: 11} }, right: { value: 14, left: { value: 13 }, right: {value: 15} } } }", function() {
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

		node2.left = node4;
		node2.right = node5;

		node3.left = node6;
		node3.right = node7;

		node4.left = node8;
		node4.right = node9;

		node5.left = node10;
		node5.right = node11;

		node6.left = node12;
		node6.right = node13;

		node7.left = node14;
		node7.right = node15;

		var lists = createListFromTreeDFS(node1);

		lists.length.should.equal(4);

		var list = lists[0],
			head = list.firstNode();

		head.data.value.should.equal(8);
		(head.next === null).should.equal(true);

		list = lists[1];
		head = list.firstNode();

		head.data.value.should.equal(4);
		head.next.data.value.should.equal(12);
		(head.next.next === null).should.equal(true);

		list = lists[2];
		head = list.firstNode();
		head.data.value.should.equal(2);
		head.next.data.value.should.equal(6);
		head.next.next.data.value.should.equal(10);
		head.next.next.next.data.value.should.equal(14);
		(head.next.next.next.next === null).should.equal(true);

		list = lists[3];
		head = list.firstNode();
		head.data.value.should.equal(1);
		head.next.data.value.should.equal(3);
		head.next.next.data.value.should.equal(5);
		head.next.next.next.data.value.should.equal(7);
		head.next.next.next.next.data.value.should.equal(9);
		head.next.next.next.next.next.data.value.should.equal(11);
		head.next.next.next.next.next.next.data.value.should.equal(13);
		head.next.next.next.next.next.next.next.data.value.should.equal(15);
		(head.next.next.next.next.next.next.next.next === null).should.equal(true);

	});

});

