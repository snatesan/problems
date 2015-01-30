"use strict";

var WordDictionary = require("../lib/wordpuzzle.js");

function inputMessage() {
	console.log("To add word(s) -a <word(s)>. eg: -add apple banana. \nTo search a word -w <word>. \nTo search a prefix -p <word>.\n");
}

function addWords(inputArr) {
	inputArr.forEach(addWord);

	console.log("\nwords are added.\n");
	inputMessage();
}

function addWord(input) {
	if(input) {
		input = input.trim();
		if(input) {
			root.addWord(input);
		}
	}
}

function searchWord(input) {
	if(input) {
		input = input.trim();
		if(input) {
			console.log("\nnumber of words matching " + input + " = " + root.countWords(input) + "\n");
		}
	}
	inputMessage();
}

function searchPrefix(input) {
	if(input) {
		input = input.trim();
		if(input) {
			console.log("\nnumber of words with prefix " + input + " = " + root.countPrefixes(input) + "\n");
		}
	}
	inputMessage();
}

var root = new WordDictionary();

process.stdin.setEncoding("utf8");


process.stdin.on("readable", function() {
	var chunk = process.stdin.read(),
		inputArr, command;

	if(chunk != null) {
		chunk = chunk.trim();
		inputArr = chunk.split(" ");
		
		if(inputArr.length) {
			command = inputArr.shift();

			switch(command) {
				case "-a":
					addWords(inputArr);
					break;
				case "-w":
					searchWord(inputArr.shift());
					break;
				case "-p":
					searchPrefix(inputArr.shift());
					break;
				default:
					inputMessage();
			}
		} else {
			inputMessage();
		}
	}
});

inputMessage();


