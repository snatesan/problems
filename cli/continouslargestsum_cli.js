"use strict";

var largestContinousSum = require("../lib/continouslargestsum");

function processArgs(val, index) {
	var num;
	if(index > 1) {
		num = parseInt(val, 10);
		if(!isNaN(num)) {
			input.push(num);
		}
	}
}

var input = [];

process.argv.forEach(processArgs);

var out = largestContinousSum(input);

if(out !== undefined) {
	console.log(out);
}

