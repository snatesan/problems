//Given an integer array, output all pairs that sum up to a specific value k. - See more at: http://www.ardendertat.com/2011/09/17/programming-interview-questions-1-array-pair-sum/#sthash.pui2pBtw.dpuf

function pairSum(arr, k) {
	var len = arr.length,
		left, right, currentSum;

	if(len < 2) {
		return;
	}

	arr.sort();
	console.log(arr);

	left = 0;
	right = len - 1;

	while(left < right) {
		currentSum = arr[left] + arr[right];
		if(currentSum == k) {
			console.log("{" + arr[left] + ", " + arr[right] + "}");
			left += 1;
		} else if(currentSum < k) {
			left += 1;
		} else {
			right -= 1;
		}
	}
}

var input = [],
	k,
	argLen = process.argv.length;

process.argv.forEach(function(val, index) {
	if(index > 1) {
		if(index == argLen - 1) {
			k = parseInt(val, 10);
		} else {
			input.push(parseInt(val, 10));
		}
	}
});

pairSum(input, k);
		
