/*There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array. - See more at: http://www.ardendertat.com/2011/09/27/programming-interview-questions-4-find-missing-element/#sthash.4A2LAIuA.dpuf*/

//Solution with complextity n and space n

function findMissingNumber(numArr1, numArr2) {
	var map = {},
		num, mapItem;

	for(var i in numArr2) {
		num = numArr2[i];
		mapItem = map[num];
		if(mapItem) {
			mapItem += 1;
		} else {
			map[num] = 1;
		}
	}

	for(var j in numArr1) {
		num = numArr1[j];
		mapItem = map[num];
		if(mapItem) {
			map[num] -= 1;
		} else {
			return num;
		}
	}
}


var option = [ 
		{ name: "a1", type: "csv,int", description: "First array", example: "--a1=1,2,3" }, 
		{ name: "a2", type: "csv,int", description: "Second array with missing element", example: "--a2=3,2" } ],
	argv = require("argv"),
	input = argv.info("Finding missing element in the second array. Solution has linear complexity with linear space").
		option(option).
		run();

var a1 = input.options.a1,
	a2 = input.options.a2;

if(Array.isArray(a1) && Array.isArray(a2)) {
	console.log("\nmissing number is " + findMissingNumber(a1, a2));
} else {
	argv.help();
}
			
