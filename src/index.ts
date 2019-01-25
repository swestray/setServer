import { Card } from "./model/card";
import { Color, Shape, Value } from "./enum/cardAttributes";

const fs = require('fs');
const path = require('path');
const { project } = require('./projection');

const Game = require('./model/schema')
const { ApolloServer } = require('apollo-server');

const deck = [
  {
    number: 1,
    color: Color.Red,
    shape: Shape.Capsule,
    value: Value.Empty
  },
  {
    number: 2,
    color: Color.Green,
    shape: Shape.Diamond,
    value: Value.Shaded
  }
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = fs.readFileSync(path.join(__dirname, './gql/gameTypes.graphql'), 'utf-8');

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    async user(parent, { id }, context, info) {
      const proj = project(info);
      const result = await Game.findById(id, proj);
      return result.toObject();
    },
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});