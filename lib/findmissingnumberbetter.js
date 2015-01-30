"use strict";
/*There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array. - See more at: http://www.ardendertat.com/2011/09/27/programming-interview-questions-4-find-missing-element/#sthash.4A2LAIuA.dpuf*/

//Solution with complextity n and space n

function findMissingNumber(numArr1, numArr2) {
	var missingNumber = 0;

	for(var i in numArr1) {
		missingNumber ^= numArr1[i];
	}

	for(var j in numArr2) {
		missingNumber ^= numArr2[j];
	}

	return missingNumber;
}

module.exports = findMissingNumber;
