class Employee {
    constructor(name, salary, title, boss = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.boss = boss;
        if (boss) boss.addEmployee(this);
    }
    bonus(multiplier) {
        this.bonus = salary * multiplier
    }
}





module.exports = {
    Employee
}
