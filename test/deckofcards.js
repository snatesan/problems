"use strict";

var DeckOfCards = require("../lib/deckofcards.js"),
	Deck = DeckOfCards.Deck,
	Hand = DeckOfCards.Hand,
	CardType = DeckOfCards.CardType;

describe("test deck", function() {
	it("isAvailable method test", function() {
		var deck = new Deck();

		deck.isAvailable().should.equal(true);

		while(deck.dealCard()) {
		}

		deck.isAvailable().should.equal(false);
	});

	it("dealCard test", function() {
		var deck = new Deck(),
			cardValue = 1,
			cardType = 0,
			card = deck.dealCard();
		
		while(card) {
			card.value.should.equal(cardValue);
			card.type.should.equal(cardType);
			if(card.value == 13) {
				cardType++;
				cardValue = 1;
			} else {
				cardValue++;
			}
			card = deck.dealCard();
		}
	});

	it("shuffle test", function() {
		var deck = new Deck();

		deck.shuffle();

		var card = deck.dealCard();

		card.value.should.not.equal(1);

	});

	it("hand test", function() {
		var deck = new Deck(),
			hand = new Hand(),
			totalVal = 0,
			card;

		deck.shuffle();

		for(var i = 0; i < 5; i++) {
			card = deck.dealCard();

			totalVal += card.value;

			hand.addCard(card);
		}

		hand.getValue().should.equal(totalVal);
	});

});
