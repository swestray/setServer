const gqlProjection = require('graphql-advanced-projection');

module.exports = gqlProjection({
    Game: {
        proj: {
            id: '_id',
            deck: 'deck',
            board: 'board',
            players: 'players'
        }
    }
});