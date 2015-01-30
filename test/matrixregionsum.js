"use strict";

var RegionSum = require("../lib/matrixRegionSum");

describe("find sum inside a region in matrix", function() {

	describe("for matrix [[1, 2, 3], [4, 5, 6]]", function(){
		var matrix = [[1, 2, 3], [4, 5, 6]],
			regionSum = new RegionSum(matrix);

		it("should return 16 for region { start: { x: 0, y: 1}, end: { x: 1, y: 2} }", function() {
			var region = { start: { x: 0, y: 1}, end: { x: 1, y: 2} };
			regionSum.getSum(region);
		});

		it("should return 21 for region { start: { x: 0, y: 0}, end: { x: 1, y: 2} }", function() {
			var region = { start: { x: 0, y: 0}, end: { x: 1, y: 2} };
			regionSum.getSum(region);
		});

		it("should return 12 for region { start: { x: 0, y: 1}, end: { x: 1, y: 1} }", function(){
			var region = { start: { x: 0, y: 1}, end: { x: 1, y: 1} };
			regionSum.getSum(region);
		});

		it("should return 5 for region { start: { x: 0, y: 1}, end: { x: 0, y: 2} }", function() {
			var region = { start: { x: 0, y: 1}, end: { x: 0, y: 2} };
			regionSum.getSum(region);
		});

	});

	describe("for matrix [ \n[70, 37, 23, 57, 27, 22, 90, 99, 22, 59],\n[47, 63, 33, 1, 42, 46, 6, 70, 98, 93],\n[36, 62, 50, 21, 92, 27, 60, 29, 15, 34],\n[53, 3, 88, 45, 57, 39, 83, 81, 79, 56],\n[28, 63, 89, 20, 47, 15, 84, 18, 82, 33],\n[26, 87, 11, 76, 79, 5, 94, 55, 73, 51],\n[17, 82, 86, 10, 96, 5, 42, 43, 51, 6],\n[44, 76, 51, 4, 15, 99, 52, 11, 70, 89],\n[66, 36, 92, 85, 50, 21, 72, 27, 52, 65],\n[60, 0, 67, 37, 59, 14, 33, 13, 36, 36]\n]", function() {
		var matrix2 = [
				[70, 37, 23, 57, 27, 22, 90, 99, 22, 59],
				[47, 63, 33, 1, 42, 46, 6, 70, 98, 93],
				[36, 62, 50, 21, 92, 27, 60, 29, 15, 34],
				[53, 3, 88, 45, 57, 39, 83, 81, 79, 56],
				[28, 63, 89, 20, 47, 15, 84, 18, 82, 33],
				[26, 87, 11, 76, 79, 5, 94, 55, 73, 51],
				[17, 82, 86, 10, 96, 5, 42, 43, 51, 6],
				[44, 76, 51, 4, 15, 99, 52, 11, 70, 89],
				[66, 36, 92, 85, 50, 21, 72, 27, 52, 65],
				[60, 0, 67, 37, 59, 14, 33, 13, 36, 36]
			],
			regionSum= new RegionSum(matrix2);

		it("should return 1175 for region { start: { x: 3, y: 3}, end: { x: 7, y: 7 } }", function() {
			var region = { start: { x: 3, y: 3}, end: { x: 7, y: 7 } };
			regionSum.getSum(region);
		});
	});

});
