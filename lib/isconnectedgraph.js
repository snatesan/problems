/* Given a directed graph, design an algorithm to find out whether there is a route between two nodes */

"use strict";

function isConnectedGraph(node1, node2) {
	var queue = [],
		adjacents,
		adjNode,
		node;
	
	queue.push(node1);

	while(queue.length) {
		node = queue.shift();
		if(node.visited) {
			continue;
		}

		node.visited = true;
		if(node == node2) {
			return true;
		} else {
			adjacents = node.adjacents;
			var adjLen = adjacents.length,
				index = 0;
			for(; index < adjLen; index++) {
				adjNode = adjacents[index];
				if(!adjNode.visited) {
					queue.push(adjNode);
				}
			}
		}
	}

	return false;
}

module.exports = isConnectedGraph;
