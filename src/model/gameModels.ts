type Game = {
    deck: Deck
    board: Board
    players: [Player]
  }
  
  type Deck = {
    cards: [Card]
  }
  
  type Board = {
    cards: [Card]
  }
  
  type Player = {
    name: String
    score: Number
  }
  
  type Card = {
    color: Color
    shape: Shape
    value: Value
  }