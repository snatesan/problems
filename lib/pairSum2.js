"use strict";
/*Given an integer array, output all pairs that sum up to a specific value k. - See more at: http://www.ardendertat.com/2011/09/17/programming-interview-questions-1-array-pair-sum/#sthash.WrQshfSs.dpuf*/

function pairSum(arr, k) {
	var seen = {},
		output = {},
		val,
		match;

	for(var i in arr) {
		val = arr[i];
		match = k - val;
		if(seen[match]) {
			output[Math.min(match, val)] = Math.max(match, val);
		} else {
			seen[val] = 1;
		}
	}

	return output;
}

module.exports = pairSum;

	
