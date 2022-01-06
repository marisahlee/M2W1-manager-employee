const {Employee} = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, boss, workers = []) {
        super(name, salary, title, boss)
        this.workers = workers;
    }
    addEmployee(employee) {
        this.workers.push(employee);
    }
}

let annie = new Manager('Annie', 100000, 'Director')
let alvy = new Employee('Alvy', 75000, 'Analyst', annie)
//annie.addEmployee(alvy);
console.log(annie);
