/**
 * Super Constructor.
 */
class Employee {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.info(`Hi ${name}! my name is employee ${this.firstName}`);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }

    sayHello(name) {
        console.info(
            `Hi ${name}! my name is manager ${this.firstName} ${this.lastName}`
        );
    }
}

const toriq = new Employee("Mikail");
toriq.sayHello("Bangun");

const bangun = new Manager("Bangun", "Paduko");
bangun.sayHello("Toriq");

console.info(toriq);
console.info(bangun);
