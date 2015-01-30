"use strict";

var argv = require("argv"),
	kthlargest = require("../lib/kthlargest"),
	option = [ 
		{ name: "arr", short: "a", type: "csv,int", description: "number array", example: "--arr=3,1,2,1,4" }, 
		{ name: "k", short: "k", type: "int", description: "value of k", example: "--k=3" } ],
	args = argv.info("Given an array of integers find the kth element in the sorted order").
		option(option).
		run();

var arr = args.options.arr,
	k = args.options.k;

if(Array.isArray(arr) && !isNaN(k)) {
	console.log(kthlargest(arr, k));
} else {
	argv.help();
}
	

