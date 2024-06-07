/**
 * Constructor Inheritance.
 */
function Name(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}! my name is ${firstName}`);
    };
}

function FullName(firstName, lastName) {
    Name.call(this, firstName);
    this.lastName = lastName;
}

const arief = new FullName("Arief Karditya","Hermawan");
console.info(arief);
