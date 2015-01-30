"use strict";

var WordDictionary = require("../lib/wordpuzzle.js");

describe("Word Look up", function() {
	
	describe("for a dictionary with \"cat cup apple ball\"", function() {
		
		var root = new WordDictionary();
		root.addWord("cat");
		root.addWord("cup");
		root.addWord("apple");
		root.addWord("ball");

		it("should return 0 count for word \"c\"", function() {
			root.countWords("c").should.equal(0);
		});

		it("should return 2 count for word prefix \"c\"", function() {
			root.countPrefixes("c").should.equal(2);
		});
	});

});


