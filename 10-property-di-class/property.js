/**
 * Property di class.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
}

class PersonFullName {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const arief = new Person("Arief");
console.info(arief);
console.info(arief.name);

const hilmi = new PersonFullName("Hilmi Akbar", "Muharrom");
console.info(hilmi);
console.info(`firstName: ${hilmi.firstName}, lastName: ${hilmi.lastName}`);
