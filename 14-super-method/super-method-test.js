/**
 * Super Method
 */
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(name) {
        console.info(
            `Hi ${name}! this employee name is ${this.firstName} ${this.lastName}`
        );
    }

    run() {
        console.info(`${this.firstName} is running.`);
    }
}

class EmployeeAgain extends Employee {
    sayHello(name){
        super.sayHello(name);
    }
    
    run() {
        super.run();
    }
}

const arif = new Employee("Arif", "Setiawan");
arif.sayHello("Arief");

const arief = new EmployeeAgain("Arief", "Hermawan");
arief.sayHello("Arif");
arief.run();

console.info(arief);
console.info(arif);
