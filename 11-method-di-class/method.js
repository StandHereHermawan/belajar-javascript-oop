/**
 * Method di class
 */
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(name) {
        console.info(
            `Hi ${name}! my name is ${`${this.firstName} ${this.lastName}`}`
        );
    }
}

const hilmi = new Person("Hilmi Akbar", "Muharrom");
hilmi.sayHello("Arief");
console.info(hilmi);