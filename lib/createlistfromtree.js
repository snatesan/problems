/*Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth */

"use strict";

var LinkedList = require("./linkedlist");

function createListFromTreeDFS(node, lists, height) {
	var list;

	if(!node) {
		return null;
	}

	if(lists === undefined) {
		lists = [];
	}

	if(height === undefined) {
		height = 0;
	}

	list = lists[height];

	if(!list) {
		list = new LinkedList();
		lists[height] = list;
	}

	list.add(node);

	createListFromTreeDFS(node.left, lists, height + 1);
	createListFromTreeDFS(node.right, lists, height + 1);

	return lists;

}

function createListFromTreeBFS(node) {
	var lists = [],
		list,
		current,
		parents,
		parent,
		head;

	if(!node) {
		return null;
	}

	current = new LinkedList();

	current.add(node);

	while(current.size() > 0) {
		lists.add(current);

		parents = current;

		current = new LinkedList();

		parent = parents.firstNode();

		while(parent) {
			if(parent.left) {
				current.add(parent.left);
			}

			if(parent.right) {
				current.add(parent.right);
			}

			parent = parent.next;
		}

		return lists;
	}
}

module.exports = {
	bfs: createListFromTreeBFS,
	dfs: function(root) {
		return createListFromTreeDFS(root);
	}
};
