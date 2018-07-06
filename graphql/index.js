
const express = require('express');
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { resolvers } = require('./resolver.js');
const { typeDefs  } = require('./schema.js');

const fs = require('fs');

// var resolvers = {
//     Query: {
//         getEmployees: (_, { first }) => {
//             let employees = JSON.parse(fs.readFileSync('./graphql/Employee.json'));
//             if (first) {
//                 var emp = [];
//                 for (var i = 0; i < first; i++)
//                     emp.push(employees.Employees[i]);
//                 return emp;
//             } else
//                 return employees.Employees
//         }
//     }
// }

var schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const server = express();
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL : '/graphql' }));

server.listen(3001),() => console.log('GraphQL Server started at http://localhost:3001');