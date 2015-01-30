/*Write a function to determine the number of bits you would need to flip to convert integer A to integer B.

Example
Input: 29 (11101), 15 (01111)
*/
"use strict";

function bitSwapRequired(num1, num2) {
	var xor = num1 ^ num2,
		count = 0;
	
	while(xor !== 0) {
		count = count + (xor & 1); // counting the number of ones in the xor result
		xor = xor >> 1;
	}

	return count;

}

function bitSwapRequiredBetter(num1, num2) {
	var xor = num1 ^ num2,
		count = 0;

	while(xor !== 0) {
		count++;
		xor = xor & (xor -1); //clears the least significant bit
	}

	return count;
}

module.exports = {
	bitSwapRequired: bitSwapRequired,
	bitSwapRequiredBetter: bitSwapRequiredBetter
};

