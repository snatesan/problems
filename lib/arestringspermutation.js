"use strict";
//Given two strings, write a method to decide if one is a permutation of the other

function isPermutation(s1, s2) {
	var s1len	= s1.length,
		s2len	= s2.length,
		dict	= {},
		c,
		index;

	for(index = 0; index < s1len; index++) {
		c = s1.charAt(index);
		if(dict[c]) {
			dict[c] = dict[c] + 1;
		} else {
			dict[c] = 1;
		}
	}

	for(index = 0; index < s2len; index++) {
		c = s2.charAt(index);
		if(dict[c]) {
			dict[c] = dict[c] - 1;
		} else {
			return false;
		}
	}

	return true;

}

module.exports = isPermutation;
