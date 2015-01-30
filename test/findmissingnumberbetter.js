"use strict";

var findmissingnumber = require("../lib/findmissingnumberbetter");

describe("find missing number", function() {
	it("should return 5 for input [4, 1, 0, 2, 9, 6, 8, 7, 5, 3] and [6, 4, 7, 2, 1, 0, 8, 3, 9]", function() {
		findmissingnumber([4, 1, 0, 2, 9, 6, 8, 7, 5, 3], [6, 4, 7, 2, 1, 0, 8, 3, 9]);
	});
});
