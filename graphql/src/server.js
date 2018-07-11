
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { resolvers } = require('./resolver.js');
const { typeDefs  } = require('./schema.js');

const fs = require('fs');

var schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const server = express();

server.use('/graphql', 
    cors(), 
    bodyParser.json(), 
    graphqlExpress(req => { 
        return {
            schema: schema,
            context: {
                value : req
            }
        }
    }));
server.use('/graphiql', graphiqlExpress({ endpointURL : '/graphql' }));

server.listen(3001,() => console.log('GraphQL Server started at http://localhost:3001'));