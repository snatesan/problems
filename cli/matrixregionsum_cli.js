"use strict";

var stdin = process.stdin,
	stdout = process.stdout,
	RegionSum = require("../lib/matrixRegionSum"),
	inputMode = 0,
	matrix = [],
	region, instance;

function messageToInputMatrix() {
	stdout.write("input matrix. \nEach line curresponds to a row and columns are seperated by space. \nInput empty line to indicate end of matrix. \n\n");
	inputMode = 0;
	matrix = [];
}

function messageToInputRegion(notFirst) {
	if(notFirst) {
		stdout.write("\ninput another region.");
	} else {
		stdout.write("input region. Example 0 0 2 2. \n");
	}
	region = null;
	inputMode = 1;
}

function addIntoMatrix(chunk) {
	var row		= chunk.trim().split(" "),
		rowLen	= row.length,
		index	= 0,
		numRow = [],
		val;

	if(rowLen) {
		for(; index < rowLen; index++) {
			val = parseInt(row[index], 10);
			if(!isNaN(val)) {
				numRow.push(val);
			} 
		}

		if(numRow.length) {
			matrix.push(numRow);
		}
	}
}

function addIntoRegion(chunk) {
	var row		= chunk.trim().split(" "),
		rowLen	= row.length;
	if(rowLen == 4) {
		region = { start: { x: parseInt(row[0], 10), y: parseInt(row[1], 10) }, end: { x: parseInt(row[2], 10), y: parseInt(row[3], 10) } };
	}
}

function calculateRegionSum() {
	//matrixRegionSum(matrix, region, sums);
	instance && console.log("sum is " + instance.getSum(region));
}
	
stdin.setEncoding("utf8");

messageToInputMatrix();

stdin.on("readable", function() {
	var chunk = stdin.read();
	if(chunk != null) {
		if(chunk.length == 2 && chunk.charCodeAt(0) == 5) { //ctrl-e
			messageToInputMatrix();
		} else if(inputMode == 0 && chunk == "\n") {
			if(matrix.length){
				instance = new RegionSum(matrix);
				messageToInputRegion();
			} else {
				messageToInputMatrix();
			}
		} else if(inputMode == 0) {
			addIntoMatrix(chunk);
		} else if(inputMode == 1) {
			addIntoRegion(chunk);

			calculateRegionSum();

			messageToInputRegion(true);
		}
	}
});
	

				
