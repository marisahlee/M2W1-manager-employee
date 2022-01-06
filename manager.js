const {Employee} = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, boss) {
        super(name, salary, title, boss)
        this.workers = [];
    }

    addEmployee(employee) {
        this.workers.push(employee);
    }

    bonus(multiplier) {
        return (this.salary + this.totalSubSalary()) * multiplier;
    }

    totalSubSalary() {
        let total = 0;
        this.employees.forEach(employee => {
            total += employee.salary;
            if (employee instanceof Manager) {
                total += employee.totalSubSalary();
            }
        })
        return total;
    }
}

let annie = new Manager('Annie', 100000, 'Director')
let alvy = new Employee('Alvy', 75000, 'Analyst', annie)
//annie.addEmployee(alvy);
console.log(annie);
