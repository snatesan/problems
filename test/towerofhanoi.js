"use strict";

var Tower = require("../lib/towerofhanoi.js");

describe("towerofhanoi test", function() {
	it("moving stack 3 -> 2 - 1 from stack A to empty stack B using another stack C as buffer", function() {
		var towerA = new Tower(),
			towerB = new Tower(),
			towerC = new Tower();

		towerA.add(3);
		towerA.add(2);
		towerA.add(1);

		towerA.moveDisks(3, towerC, towerB);

		towerC.getDisks().peek().should.eql(1);
		towerA.getDisks().isEmpty().should.equal(true);
		towerB.getDisks().isEmpty().should.equal(true);

	});
});
