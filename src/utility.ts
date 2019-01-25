import { Card } from "./model/card";
import { Color, Shape, Value } from "./enum/cardAttributes";

function generateDeck() {
    var cards = [];
    var n = 3;
    while(n > 0){
      for(let color in Color){
        for(let shape in Shape){      
          for(let value in Value){
            let card = new Card(n, color, shape, value)
            cards = cards.concat(card)
            n--;
          }
        }
  
      }
    }
    return cards;
  }

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}