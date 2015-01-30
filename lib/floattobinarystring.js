/*Given a real number between 0 and 1 (e.g 0.72), print the binary representation.*/
"use strict";

function floatToBinaryString1(num){
	if(num > 1 || num < 0) {
		throw Error("Invalid input");
	}

	var results = [];

	while(num > 0) {
		num = num * 2;
		
		if(num >= 1) {
			results.push(1);
			num = num - 1;
		} else {
			results.push(0);
		}

	}

	return "0." + results.join("");
}

function floatToBinaryString2(num) {
	if(num > 1 || num < 0) {
		throw Error("Invalid input");
	}

	var results = [],
		frac = 1/2;

	while(num > 0) {
		if(num >= frac) {
			results.push(1);
			num = num - frac;
		} else {
			results.push(0);
		}

		frac = frac / 2;
	}

	return "0." + results.join("");
}

module.exports = {
	floatToBinaryString1: floatToBinaryString1,
	floatToBinaryString2: floatToBinaryString2
};
