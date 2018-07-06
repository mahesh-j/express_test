const { GraphQLServer } = require('graphql-yoga');
const fs = require('fs');

let employees = JSON.parse(fs.readFileSync('./ui5app/models/json/Employee.json'));

const resolvers = {
    Query : {
        getEmployees : (root, args) => { 
                if(args.first) {
                    var emp = [];
                    for (var i = 0; i < args.first; i++)
                        emp.push(employees.Employees[i]);
                    return emp;
                } else 
                    return employees.Employees 
            }
    }
}

const server = new GraphQLServer({
    typeDefs : './graphql/schema.graphql',
    resolvers
});

server.start(() => console.log('GraphQL Server started at http://localhost:4000'));