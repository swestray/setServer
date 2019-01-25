import { Color, Shape, Value } from "../enum/cardAttributes";

const mongoose = require('mongoose');

mongoose.connect('mongodb://<stone>:<westray1>@ds143932.mlab.com:43932/set_server_db');

const CardSchema = new mongoose.Schema({
    number: Number,
    color: Number,
    shape: Number,
    value: Number
})

const PlayerSchema = new mongoose.Schema({
    name: String,
    score: Number
})

const BoardSchema = new mongoose.Schema({
    cards: [CardSchema]
})

const DeckSchema = new mongoose.Schema({
    cards: [CardSchema]
})

const GameSchema = new mongoose.Schema({
    _id: String,
    deck: DeckSchema,
    board: BoardSchema,
    players: [PlayerSchema]
});

 module.exports = {
     Game: mongoose.model('games', GameSchema),
 };