"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cardAttributes_1 = require("../enum/cardAttributes");
var mongoose = require('mongoose');
mongoose.connect('mongodb://<stone>:<westray1>@ds143932.mlab.com:43932/set_server_db');
var CardSchema = new mongoose.Schema({
    number: Number,
    color: cardAttributes_1.Color,
    shape: cardAttributes_1.Shape,
    value: cardAttributes_1.Value
});
var PlayerSchema = new mongoose.Schema({
    name: String,
    score: Number
});
var BoardSchema = new mongoose.Schema({
    cards: [CardSchema]
});
var DeckSchema = new mongoose.Schema({
    cards: [CardSchema]
});
var GameSchema = new mongoose.Schema({
    _id: String,
    deck: DeckSchema,
    board: BoardSchema,
    players: [PlayerSchema]
});
