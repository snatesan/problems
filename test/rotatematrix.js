"use strict";

var rotateMatrix = require("../lib/rotateMatrix");

describe("rotate nxn matrix 90 degrees", function() {
	it("should return [[3,1],[4,2]] for input [[1, 2],[3,4]]", function() {
		rotateMatrix([[1,2],[3,4]]).should.eql([[3,1],[4,2]]);
	});

	it("should return [[7,4,1],[8,5,2],[9,6,3]] for input [[1,2,3],[4,5,6],[7,8,9]]", function() {
		rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]).should.eql([[7,4,1],[8,5,2],[9,6,3]]);
	});

	it("should return [[13,9,5,1],[14,10,6,2],[15,4,7,3],[16,12,8,4]] for input [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]", function() {
		rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]).should.eql([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]);
	});

});
