"use strict";

var pairSum = require("../lib/pairSum2"),
	input = [],
	k,
	argLen = process.argv.length;

process.argv.forEach(function(val, index) {
	if(index > 1) {
		if(index == argLen - 1) {
			k = parseInt(val, 10);
		} else {
			input.push(parseInt(val, 10));
		}
	}
});

var output = pairSum(input, k);
for(var item in output) {
	console.log("{" + item + ", " + output[item] + "}");
}

	
