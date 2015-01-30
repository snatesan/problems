/*Design the data structures for a generic deck of cards. Explain how you would subclass the data structures to implement blackjack. */

"use strict";

var util = require("util");

var CardType = {
	CLUB: 0,
	HEART: 1,
	DIAMOND: 2,
	SPADE: 3
};

function Card(t, v) {
	var type = t,
		value = v;

	if(!(type >= 0 && type <= 3)) {
		throw Error("Not a valid card type");
	}

	if(!(value > 0 && value <= 14)) {
		throw Error("Not a supported value");
	}

	Object.defineProperties(this, { 
		"value": {
			get: function() {
				return value;
			}
		},
		"type": {
			get: function() {
				return type;
			}
		}
	});

}

function Deck() {
	var cards = [],
		dealtIndex = 0;

	generateCards(cards, CardType.CLUB);
	generateCards(cards, CardType.HEART);
	generateCards(cards, CardType.DIAMOND);
	generateCards(cards, CardType.SPADE);

	function shuffle() {
		var min = dealtIndex,
			max = cards.length,
			index = dealtIndex,
			randomIndex,
			minValue, randomIndexValue;

		for(; min < max; min++) {
			randomIndex = Math.floor(Math.random() * (max - min)) + min;
			minValue = cards[min];
			randomIndexValue = cards[randomIndex];
			if(minValue != randomIndexValue) {
				cards[min] = randomIndexValue;
				cards[randomIndex] = minValue;
			}
		}
	}

	function dealCard() {
		var card;
		if(dealtIndex < cards.length) {
			card = cards[dealtIndex];
			dealtIndex++;
		}
		return card;
	}

	function isAvailable() {
		return dealtIndex < cards.length;
	}

	this.shuffle = shuffle;
	this.dealCard = dealCard;
	this.isAvailable = isAvailable;
}

function Hand() {
	var cards = [];

	function addCard(card) {
		cards.push(card);
	}

	function getValue() {
		var len = cards.length,
			index = 0,
			val = 0;

		for(; index < len; index++) {
			val += cards[index].value;
		}

		return val;
	}

	this.addCard = addCard;
	this.getValue = getValue;
}

function generateCards(cards, type) {
	var index = 0,
		len = 13,
		cardLen = cards.length,
		card;

	for(; index < len; index++) {
		card = new Card(type, index + 1);
		cards[cardLen] = card;
		cardLen++;
	}
}

module.exports = {
	CardType: CardType,
	Deck: Deck,
	Hand: Hand
};

	
