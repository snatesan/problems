/*You are given a binary tree in which each node contains a value. Design an alogorithm to print all paths which sum to a given value. The path does not need to start or end at the root or leaf, but must go in a straight line down*/

"use strict";

function getPaths(node, val, paths, results) {
	if(!paths) {
		paths = [];
	}

	if(!results) {
		results = [];
	}

	if(!node) {
		return null;
	}

	var nodeValue = node.value,
		currentPath = nodeValue + "#" + nodeValue;

	if(nodeValue == val) {
		results.push(nodeValue.toString());
	}

	var pathLen = paths.length,
		i = 0,
		sum, path, 
		arr, pathText;

	for(; i < pathLen; i++) {
		path = paths[i];
		arr = path.split("#");
		pathText = arr[0];
		sum = parseInt(arr[1]) || 0;

		pathText = pathText + " -> " + nodeValue;
		sum = sum + nodeValue;
		paths[i] = pathText + "#" + sum;
		if(sum == val) {
			results.push(pathText);
		}
	}

	paths.push(currentPath);

	getPaths(node.left, val, paths.slice(), results);
	getPaths(node.right, val, paths.slice(), results);

	return results;
}

module.exports = function(node, val) {
	var results = getPaths(node, val),
		len = results.length,
		index = 0;

	return results;
};
			
	
