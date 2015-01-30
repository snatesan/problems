"use strict";

var getNextPrev = require("../lib/getnextsmallestandlargestnumberwithsame1bits"),
	getNextPrevBitsway = getNextPrev.getNextPrevBitsway,
	getNextPrevArith = getNextPrev.getNextPrevArith;

describe("next smallest and largest number with same number of 1s using bit manipulation", function() {
	it("should return next as 11011010001111(13967) and prev as 11011001111010(13946) for num 11011001111100(13948)", function() {
		var result = getNextPrevBitsway(13948);

		result.next.should.equal(13967);
		result.prev.should.equal(13946);
	});

	it("should return next as 10011110000101 (10117) and prev as 10011101110000 (10096) for number 10011110000011 (10115)", function() {
		var result = getNextPrevBitsway(10115);

		result.next.should.equal(10117);
		result.prev.should.equal(10096);
	});
});

describe("next smallest and largest number with same number of 1s using arithmentic operation", function() {
	it("should return next as 11011010001111(13967) and prev as 11011001111010(13946) for num 11011001111100(13948)", function() {
		var result = getNextPrevArith(13948);

		result.next.should.equal(13967);
		result.prev.should.equal(13946);
	});

	it("should return next as 10011110000101 (10117) and prev as 10011101110000 (10096) for number 10011110000011 (10115)", function() {
		var result = getNextPrevArith(10115);

		result.next.should.equal(10117);
		result.prev.should.equal(10096);
	});

});



