"use strict";

var maxProduct = require("../lib/maxproductinarray.js");

var input = [];

process.argv.forEach(function(val, index) {
		if(index > 1) {
				input.push(val);
		}
});

console.log(maxProduct(input));

