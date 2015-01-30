/*Write a program to swap odd and even bits in an integer with as few instructions a possible.*/

"use strict";

function swapOddAndEvenBits(num) {
	var mask1 = 1,
		mask2 = 0,
		flag = false;

	for(var index = 0; index < 31; index++) {
		mask1 = mask1 << 1;
		if(flag) {
			mask1 = mask1 | 1;
		}
		flag = !flag;
	}

	for(index = 0; index < 31; index++) {
		mask2 = mask2 << 1;
		if(flag) {
			mask2 = mask2 | 1;
		}
		flag = !flag;
	}

	return ( (num & mask1 ) >>> 1 ) | ( (num & mask2 ) << 1 );
}

module.exports = swapOddAndEvenBits;
