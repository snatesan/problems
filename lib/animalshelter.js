/*An animal shelter holds only dogs and cats, and operates on a strictly "first in, first out" basis. People must adopt either the "oldest"(based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat(and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog and dequeCat. You may use the built-in LinkedList data structure. */

"use strict";

/*jshint -W030 */

var LinkedList = require("./linkedlist"),
	util = require("util");

function Animal() {
	var order;

	function setOrder(ord) {
		order = ord;
	} 

	function getOrder() {
		return order;
	}

	this.setOrder = setOrder;
	this.getOrder = getOrder;

}

function Dog(){
	Animal.call(this);
}

util.inherits(Dog, Animal);

function Cat() {
	Animal.call(this);
}

util.inherits(Cat, Animal);


function AnimalQueue() {
	var catList = new LinkedList(),
		dogList = new LinkedList(),
		order = 0;

	function enqueue(animal) {
		var isDog = animal instanceof Dog,
			isCat = animal instanceof Cat;

		if(isDog || isCat) {
			order++;
			animal.setOrder(order);
		}

		isDog && dogList.add(animal);
		isCat && catList.add(animal);
	}

	function dequeueAny() {
		var dogHead = dogList.firstNode(),
			catHead = catList.firstNode(),
			dog, cat, retAnimal;

		if(dogHead && catHead) {
			dog = dogHead.data;
			cat = catHead.data;
			if(dog.getOrder() <= cat.getOrder()) {
				retAnimal = dog;
				dogList.removeFirstNode();
			} else {
				retAnimal = cat;
				catList.removeFirstNode();
			}
		} else if(dogHead) {
			dog = dogHead.data;
			retAnimal = dog;
			dogList.removeFirstNode();
		} else if(catHead) {
			cat = catHead.data;
			retAnimal = cat;
			catList.removeFirstNode();
		}

		return retAnimal;
	}

	function dequeueDog() {
		var dogHead = dogList.firstNode(),
			dog;

		if(dogHead) {
			dog = dogHead.data;
			dogList.removeFirstNode();
		}

		return dog;
	}

	function dequeueCat() {
		var catHead = catList.firstNode(),
			cat;

		if(catHead) {
			cat = catHead.data;
			catList.removeFirstNode();
		}

		return cat;
	}

	this.enqueue = enqueue;
	this.dequeueAny = dequeueAny;
	this.dequeueDog = dequeueDog;
	this.dequeueCat = dequeueCat;

}

module.exports = {
	Dog: Dog,
	Cat: Cat,
	AnimalQueue: AnimalQueue
};
		
