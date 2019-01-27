const fs = require('fs');
const path = require('path');
const { project } = require('./projection');

import { Game } from "./model/schema";
const { ApolloServer } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = fs.readFileSync(path.join(__dirname, './gql/gameTypes.graphql'), 'utf-8');

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    /*async game(parent, { id }, context, info) {
      const proj = project(info);
      const game = await Game.findById(id, proj);
      return game.toObject();
    },*/
    async getGame(parent, { id }, context, info) {
      const proj = project(info);
      const game = await Game.findById(id, proj);
      return game.toObject();
    }
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