"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cardAttributes_1 = require("./enum/cardAttributes");
var fs = require('fs');
var path = require('path');
var project = require('./projection').project;
var Game = require('./model/schema');
var ApolloServer = require('apollo-server').ApolloServer;
var deck = [
    {
        number: 1,
        color: cardAttributes_1.Color.Red,
        shape: cardAttributes_1.Shape.Capsule,
        value: cardAttributes_1.Value.Empty
    },
    {
        number: 2,
        color: cardAttributes_1.Color.Green,
        shape: cardAttributes_1.Shape.Diamond,
        value: cardAttributes_1.Value.Shaded
    }
];
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
var typeDefs = fs.readFileSync(path.join(__dirname, './gql/gameTypes.graphql'), 'utf-8');
// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
var resolvers = {
    Query: {
        user: function (parent, _a, context, info) {
            var id = _a.id;
            return __awaiter(this, void 0, void 0, function () {
                var proj, result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            proj = project(info);
                            return [4 /*yield*/, Game.findById(id, proj)];
                        case 1:
                            result = _b.sent();
                            return [2 /*return*/, result.toObject()];
                    }
                });
            });
        },
    },
};
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
