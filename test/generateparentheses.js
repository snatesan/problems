"use strict";

var getParentheses = require("../lib/generateparentheses");

describe("getParentheses test", function() {
	it("should return () for count 1", function() {
		var result = getParentheses(1);

		result.should.eql(["()"]);
	});

	it("should return ()(), (()) for count 2", function() {
		var result = getParentheses(2);

		result.should.eql(["(())", "()()"]);
	});

	it("should return ((())), (()()), (())(), ()(()), ()()() for count 3", function() {
		var result = getParentheses(3);

		result.should.eql(["((()))", "(()())", "(())()", "()(())", "()()()"]);
	});

});
