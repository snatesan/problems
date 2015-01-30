"use strict";

var QueueWithStack = require("../lib/queuewithstack");

describe("test queuewithstack", function() {
	it("enqueue, dequeue and peek test", function() {
		var q = new QueueWithStack();

		q.enqueue(1);
		q.enqueue(2);
		q.peek().should.equal(1);
		q.enqueue(3);
		q.dequeue().should.equal(1);
		q.dequeue().should.equal(2);
		q.dequeue().should.equal(3);

	});

});
