"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./model/card");
var cardAttributes_1 = require("./enum/cardAttributes");
function generateDeck() {
    var cards = [];
    var n = 3;
    while (n > 0) {
        for (var color in cardAttributes_1.Color) {
            for (var shape in cardAttributes_1.Shape) {
                for (var value in cardAttributes_1.Value) {
                    var card = new card_1.Card(n, color, shape, value);
                    cards = cards.concat(card);
                    n--;
                }
            }
        }
    }
    return cards;
}
function shuffle(a) {
    var _a;
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
    }
    return a;
}
