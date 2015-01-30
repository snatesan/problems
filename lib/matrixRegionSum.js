"use strict";

/*Given a matrix of integers and coordinates of a rectangular region within the matrix, find the sum of numbers falling inside the rectangle. Our program will be called multiple times with different rectangular regions from the same matrix. - See more at: http://www.ardendertat.com/2011/09/20/programming-interview-questions-2-matrix-region-sum/#sthash.G3gOE7Cn.dpuf*/

function preCoumputeSums(matrix) {
	var rowLen = matrix.length,
		colLen,
		row,
		item,
		itemSum,
		rowSum,
		rowIndex, colIndex,
		sums = [];

	if(!rowLen) {
		return;
	}

	for(rowIndex = 0; rowIndex < rowLen; rowIndex++) {
		rowSum = 0;
		row = matrix[rowIndex];
		colLen = row.length;

		sums[rowIndex] = [];
		
		for(colIndex = 0; colIndex < colLen; colIndex++) {
			item = row[colIndex];

			itemSum = rowSum + item;

			rowSum = itemSum;
			
			if(rowIndex > 0) {
				itemSum += sums[rowIndex-1][colIndex];
			}

			sums[rowIndex][colIndex] = itemSum;
		}

	}

	return sums;

}

function matrixRegionSum(matrix, region, sums) {
	var startX	= region.start.x,
		startY	= region.start.y,
		endX	= region.end.x,
		endY	= region.end.y,
		A, B, C, D,
		sum;

	

	//sum = sums[endX][endY] - sums[startX-1][endY] - sums[endX][startY-1] + sums[startX-1][startY-1] which is D - B - C + A

	if(startX === 0 || startY  === 0) {
		A = 0;
	} else {
		A = sums[startX - 1][startY -1];
	}

	if(startX === 0) {
		B = 0;
	} else {
		B = sums[startX - 1][endY];
	}

	if(startY === 0) {
		C = 0;
	} else {
		C = sums[endX][startY-1];
	}

	D = sums[endX][endY];

	/*console.log("A = " + A);
	console.log("B = " + B);
	console.log("C = " + C);
	console.log("D = " + D);*/

	sum = D - B - C + A;

	return sum;
}

function RegionSum(matrix) {
	if(!(this instanceof RegionSum)) {
		return new RegionSum(matrix);
	}

	var sums = preCoumputeSums(matrix);

	return {
		getSum: function(region) {
			return matrixRegionSum(matrix, region, sums);
		}
	};
}

module.exports = RegionSum;


