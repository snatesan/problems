"use strict";

function rotateMatrix(matrix) {
	var size		= matrix.length,
		limit		= size / 2,
		topVal,
		shift,
		index,
		colIndex, 
		start, 
		end;

	for(index = 0; index < limit; index++) {
		
		start = index;
		end = size - start - 1;
		
		for(colIndex = start; colIndex < end; colIndex++) {
			
			shift = colIndex - start;

			topVal = matrix[start][colIndex];

			//left -> top
			matrix[start][colIndex] = matrix[end-shift][start];
			
			//bottom -> left
			matrix[end-shift][start] = matrix[end][end-shift];

			//right -> bottom
			matrix[end][end-shift] = matrix[colIndex][end];

			//top -> right
			matrix[colIndex][end] = topVal;

		}
	}

	return matrix;
}

module.exports = rotateMatrix;
