"use strict";

var AnimalModule = require("../lib/animalshelter"),
	Dog = AnimalModule.Dog,
	Cat = AnimalModule.Cat,
	AnimalQueue = AnimalModule.AnimalQueue;

describe("animal queue", function() {
	it("test enqueue, dequeueAny, dequeueDog and dequeueCat", function() {
		var animalQueue = new AnimalQueue();

		animalQueue.enqueue(new Dog());
		animalQueue.enqueue(new Cat());
		animalQueue.enqueue(new Dog());
		animalQueue.enqueue(new Dog());
		animalQueue.enqueue(new Dog());
		animalQueue.enqueue(new Cat());
		animalQueue.enqueue(new Cat());

		var animal = animalQueue.dequeueAny();
		animal.should.be.an.instanceof(Dog);
		animal.getOrder().should.equal(1);

		animal = animalQueue.dequeueDog();
		animal.should.be.an.instanceof(Dog);
		animal.getOrder().should.equal(3);

		animal = animalQueue.dequeueAny();
		animal.should.be.an.instanceof(Cat);
		animal.getOrder().should.equal(2);

		animalQueue.enqueue(new Dog());

		animal = animalQueue.dequeueCat();
		animal.should.be.an.instanceof(Cat);
		animal.getOrder().should.equal(6);

		animal = animalQueue.dequeueAny();
		animal.should.be.an.instanceof(Dog);
		animal.getOrder().should.equal(4);

		animal = animalQueue.dequeueAny();
		animal.should.be.an.instanceof(Dog);
		animal.getOrder().should.equal(5);

		animal = animalQueue.dequeueAny();
		animal.should.be.an.instanceof(Cat);
		animal.getOrder().should.equal(7);

		animal = animalQueue.dequeueAny();
		animal.should.be.an.instanceof(Dog);
		animal.getOrder().should.equal(8);

	});
});
