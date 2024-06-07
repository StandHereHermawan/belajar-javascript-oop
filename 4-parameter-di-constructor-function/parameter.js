/**
 * Parameter di Constructor Function
 */
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(
            `Hello ${name}! my name is ${(fullName = `${this.firstName} ${this.lastName}`)}`
        );
    };
}

const rizky = new Person("Rizky", "Permana");
rizky.sayHello("Arief");

const arief = new Person("Arief", "Hermawan");
arief.sayHello("Rizky");
