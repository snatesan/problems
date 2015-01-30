"use strict";

//If we have a dictionary, and we need to know if a single word is inside of the dictionary the tries are a data structure that can help us

function Node() {
	var wordsCount		= 0,
		prefixCount		= 0,
		edges			= {},
		edge;

	function addWord(word) {
		var k;
		if(!word) {
			wordsCount = wordsCount + 1;
		} else {
			k = word.substring(0, 1);

			edge = edges[k];
			if(!edge) {
				edge = new Node();
				edges[k] = edge;
			}

			prefixCount = prefixCount + 1;
			
			edge.addWord(word.substring(1));
		}
	}

	function countWords(word){
		var k, edge;

		if(!word) {
			return wordsCount;
		}

		k = word.substring(0, 1);

		edge = edges[k];

		if(edge) {
			return edge.countWords(word.substring(1));
		} else {
			return 0;
		}
	}

	function countPrefixes(word) {
		var k, edge;

		if(!word) {
			return prefixCount;
		}

		k = word.substring(0, 1);

		edge = edges[k];

		if(edge) {
			return edge.countPrefixes(word.substring(1));
		} else {
			return 0;
		}
	}

	this.addWord = addWord;
	this.countPrefixes = countPrefixes;
	this.countWords = countWords;

	/*this.showEdges = function() { for(var i in edges) {
		if(edges.hasOwnProperty(i)) {
			console.log(edges); }
		}
	}*/

	return this;

}

module.exports = Node;





