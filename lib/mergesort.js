"use strict";
/*Implement merge sort*/

function mergeSort(arr, start, end, result) {
	start = start || 0;
	end = end || arr.length;
	result = result || [];

	if(start == (end - 1)) {
		result[start] = start;
		return;
	}

	var mid = Math.floor( (start + end)/2 );

	//sort left
	mergeSort(arr, start, mid, result);

	//sort right
	mergeSort(arr, mid, end, result);

	//merge the results
	var leftHasValue = start < mid,
		rightHasValue = mid < end,
		leftVal,
		rightVal;
	for(var index1 = start, index2 = mid, resIndex = start; (leftHasValue  || rightHasValue); resIndex++) {

		if(leftHasValue) {
			leftVal = arr[index1];
		}

		if(rightHasValue) {
			rightVal = arr[index2];
		}

		if(leftHasValue && rightHasValue) {
			if(leftVal <= rightVal) {
				result[resIndex] = leftVal;
				index1++;
			}else {
				result[resIndex] = rightVal;
				index2++;
			}
		} else if(leftHasValue) {
			result[resIndex] = leftVal;
			index1++;
		} else if(rightHasValue) {
			result[resIndex] = rightVal;
			index2++;
		}

		leftHasValue = index1 < mid;
		rightHasValue = index2 < end;
		
	}

	copyArray(result, arr, start, end);

}

function copyArray(from, to, start, end) {
	for(var i = start; i < end; i++) {
		to[i] = from[i];
	}
}

module.exports = mergeSort;
		
				

	

