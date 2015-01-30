"use strict";

var findMissingNumber = require("../lib/findmissingnumberbetter");

var argv = require("argv"),
	option = [ 
		{ name: "a1", type: "csv,int", description: "First array", example: "--a1=1,2,3" }, 
		{ name: "a2", type: "csv,int", description: "Second array with missing element", example: "--a2=3,2" } ],
	input = argv.info("Finding missing element in the second array. Solution has linear complexity with constant space").
		option(option).
		run();

var a1 = input.options.a1,
	a2 = input.options.a2;

if(Array.isArray(a1) && Array.isArray(a2)) {
	console.log("\nmissing number is " + findMissingNumber(a1, a2));
} else {
	argv.help();
}
			
