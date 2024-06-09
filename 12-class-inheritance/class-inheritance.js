/**
 * Class Inheritance.
 */
class Employee {
    sayHello(name) {
        console.info(`Hi ${name}! my name is employee ${this.name}`);
    }
}

class Manager extends Employee {
    sayHello(name) {
        console.info(`Hi ${name}! my name is manager ${this.name}`);
    }
}

const hilmi = new Employee();
hilmi.name = "Hilmi Akbar";
hilmi.sayHello("Bangun");

const bangun = new Manager();
bangun.name = "Bangun Paduko";
bangun.sayHello("Hilmi");

console.info(hilmi);
console.info(bangun);
