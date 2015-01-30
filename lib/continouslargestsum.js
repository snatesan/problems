//Given an array of integers (positive and negative) find the largest continuous sum. - See more at: http://www.ardendertat.com/2011/09/24/programming-interview-questions-3-largest-continuous-sum/#sthash.aCdo4ep6.dpuf
"use strict";

function largestContinousSum(numArr) {
	if(!numArr && !Array.isArray(numArr)) {
		console.log("input an array of integers");
		return;
	}

	var len = numArr.length,
		index = 1,
		maxSum, currentSum, num;

	if(!len) {
		console.log("input an array of integers");
		return;
	}

	maxSum = currentSum = numArr[0];

	for(; index < len; index++) {
		num = numArr[index];
		currentSum = Math.max(currentSum + num, num);
		maxSum = Math.max(currentSum, maxSum);
	}

	return maxSum;
}

module.exports = largestContinousSum;

		
