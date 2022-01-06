const {Employee} = require('./employee');

class Manager extends Employee {
    constructor(name, title, salary, boss, workers = []) {
        super(name, title, salary, boss, workers)
    }
    addEmployee() {
        workers.push(Employee)
    }
}

let annie = new Manager('Annie', 100000, 'Director')
let alvy = new Employee('Alvy', 75000, 'Analyst', annie)

console.log(annie)
