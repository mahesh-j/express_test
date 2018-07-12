const fs = require('fs');

module.exports = {
    resolvers: {
        Query: {
<<<<<<< HEAD
            getEmployees: (test, { first }, context) => {
                let employees = JSON.parse(fs.readFileSync('./src/Employee.json'));
=======
            getEmployees: (_, { first }, context) => {
                let employees = JSON.parse(fs.readFileSync('./Employee.json'));
>>>>>>> 143ee94249a707210861a220f50fee03647b6b11
                if (first) {
                    var emp = [];
                    for (var i = 0; i < first; i++)
                        emp.push(employees.Employees[i]);
                    return emp;
                } else
                    return employees.Employees
            }
        }
    }
}