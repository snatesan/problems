"use strict";
//Maximum product subarray
//Find the contiguous subarray within an array (containing at least one number) which has the largest product.
//For example, given the array [2,3,-2,4],
//the contiguous subarray [2,3] has the largest product = 6.

function maxProduct(arrNum) {
	var len = arrNum.length,
		i = 0,
		arrSums, preSums,
		max;

	for(; i < len; i++) {
		var num = arrNum[i];
		arrSums = [];

		arrSums.push(num);
		if(max !== undefined) {
			max = Math.max(num, max);
		} else {
			max = num;
		}

		if(preSums) {
			var lenPre = preSums.length,
				preNum, prod;
			for(var j = 0; j < lenPre; j++) {
				preNum = preSums[j];
				prod = preNum * num;
				arrSums.push(prod);
				max = Math.max(prod, max);
			}
		}

		preSums = arrSums;
	}

	return max;
}

module.exports = maxProduct;
