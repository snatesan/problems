"use strict";

var verifyCombinationString = require("../lib/combinetwostrings"),
	argv = require("argv"),
	options = [
		{ name: "str1", type: "string", description: "First string", example: "--str1=abc", short: "a" },
		{ name: "str2", type: "string", description: "Second string", example: "--str2=def", short: "b" },
		{ name: "str3", type: "string", description: "Combined string", example: "--str3=dabecf", short: "c" },
	],
	input = argv.info("Given 3 stringd verify third string is formed by interleaving the characters of str1 and str2 in a way that maintains the left to right ordering of the characters from each string.  For example, given str1=”abc” and str2=”def”, str3=”dabecf” is a valid shuffle since it preserves the character ordering of the two strings.").
		option(options).run();

var str1 = input.options.str1,
	str2 = input.options.str2,
	str3 = input.options.str3;

if(str1 && str2 && str3) {
	console.log(str3 + " is " + (verifyCombinationString(str1, str2, str3) ? "" : "not ") + "combination of " + str1 + " and " + str2);
} else {
	argv.help();
}
