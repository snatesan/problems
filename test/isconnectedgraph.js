"use strict";

var isConnectedGraph = require("../lib/isconnectedgraph");

function createNode(data) {
	return {
		data: data,
		adjacents: []
	};
}

describe("checking is there a route between two nodes in a directed graph", function() {
	it("should return true for connected nodes", function() {
		var node1 = createNode(1),
			node2 = createNode(2),
			node3 = createNode(3),
			node4 = createNode(4),
			node5 = createNode(5),
			node6 = createNode(6),
			node7 = createNode(7),
			node8 = createNode(8),
			node9 = createNode(9),
			node10 = createNode(10);

		node1.adjacents.push(node2);
		node1.adjacents.push(node3);
		node1.adjacents.push(node4);

		node2.adjacents.push(node1);
		node2.adjacents.push(node5);
		node2.adjacents.push(node6);

		node3.adjacents.push(node1);
		node3.adjacents.push(node7);
		node3.adjacents.push(node8);

		node4.adjacents.push(node1);
		node4.adjacents.push(node9);

		node5.adjacents.push(node2);
		node5.adjacents.push(node10);

		node6.adjacents.push(node2);

		node7.adjacents.push(node3);

		node8.adjacents.push(node3);

		node9.adjacents.push(node4);

		node10.adjacents.push(node5);

		isConnectedGraph(node10, node4);

	});

	it("should return false for disconnected nodes", function() {
		var node1 = createNode(1),
			node2 = createNode(2),
			node3 = createNode(3),
			node4 = createNode(4),
			node5 = createNode(5),
			node6 = createNode(6),
			node7 = createNode(7),
			node8 = createNode(8),
			node9 = createNode(9),
			node10 = createNode(10);

		node1.adjacents.push(node2);
		node1.adjacents.push(node3);
		node1.adjacents.push(node4);

		node2.adjacents.push(node1);
		node2.adjacents.push(node5);
		node2.adjacents.push(node6);

		node3.adjacents.push(node1);
		node3.adjacents.push(node7);
		node3.adjacents.push(node8);

		node4.adjacents.push(node1);
		node4.adjacents.push(node9);

		node5.adjacents.push(node2);

		node6.adjacents.push(node2);

		node7.adjacents.push(node3);

		node8.adjacents.push(node3);

		node9.adjacents.push(node4);

		node10.adjacents.push(node5);

		isConnectedGraph(node10, node4);

	});

});

