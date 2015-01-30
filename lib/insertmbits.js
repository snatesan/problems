/* You are given two 32 bit numbers, N and M and two bit positions, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through i have enough space to fit all of M.
Example:
Input N = 10000000000, M = 10011, i = 2, j = 6
Output N = 10001001100
*/

"use strict";

function insertMBitsIntoNBits(n, m, i, j) {
	var shift1 = (1 << (j + 1)) - 1,
		shift2 = (1 << i) - 1,
		mask = ~(shift1 ^ shift2);

	n = n & mask;

	m = m << i;

	n = n | m;

	return n;

}

module.exports = insertMBitsIntoNBits;
