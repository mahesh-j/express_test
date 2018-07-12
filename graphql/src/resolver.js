const fs = require('fs');

module.exports = {
    resolvers: {
        Query: {
            getEmployees: (test, { first }, context) => {
                let employees = JSON.parse(fs.readFileSync('./src/Employee.json'));
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