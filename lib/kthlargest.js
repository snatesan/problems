/*Given an array of integers find the kth element in the sorted order (not the kth distinct element). So, if the array is [3, 1, 2, 1, 4] and k is 3 then the result is 2, because it’s the 3rd element in sorted order (but the 3rd distinct element is 3) - See more at: http://www.ardendertat.com/2011/10/27/programming-interview-questions-10-kth-largest-element-in-array/#sthash.Oe3w68l6.dpuf*/

"use strict";

function kthlargest(arr, k) {
	var len, i,
		pivot,
		left,
		right,
		leftLen,
		rightLen,
		item;

	if(!arr) {
		return null;
	}

	//console.log(arr);
	//console.log(k);

	len = arr.length;

	if(k < 1 || k > len) {
		return null;
	}

	pivot = arr[0];
	left = [];
	right = [];

	for(i = 1; i < len; i++) {
		item = arr[i];
		if(item > pivot) {
			left.push(item);
		} else {
			right.push(item);
		}
	}

	leftLen = left.length;
	rightLen = right.length;

	//console.log(left);
	//console.log(right);
	//console.log("***");

	if(k - 1 == leftLen) {
		return pivot;
	} else if( k <= leftLen) {
		return kthlargest(left, k);
	} else {
		return kthlargest(right, k - leftLen - 1);
	}

}

module.exports = kthlargest;

