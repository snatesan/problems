"use strict";

var mergeSort = require("../lib/mergesort.js");

describe("merge sort test", function() {
	it("should return [1, 2, 3, 4, 5, 7, 8, 9] for input [8, 7, 5, 9, 4, 1, 3, 2]", function() {
		var input = [8, 7, 5, 9, 4, 1, 3, 2];

		mergeSort(input);

		input.should.eql([1, 2, 3, 4, 5, 7, 8, 9]);
	});

	it("should return [1, 2, 3, 4, 5, 7, 8, 9] for input [1, 2, 3, 4, 5, 7, 8, 9]", function() {
		var input = [1, 2, 3, 4, 5, 7, 8, 9];

		mergeSort(input);

		input.should.eql([1, 2, 3, 4, 5, 7, 8, 9]);
	});

});
