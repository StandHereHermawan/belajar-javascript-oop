function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(
            `Hello ${name}! my name is ${(fullName = `${this.firstName} ${this.lastName}`)}`
        );
    };
}

function showConsoleInfo(object) {
    console.info(object);
}

/**
 * Object Instance
 */
const arief = new Person("Arief Karditya", "Hermawan");
const hilmi = new Person("Hilmi Akbar", "Muharrom");

showConsoleInfo(arief);
showConsoleInfo(hilmi);

/**
 * Menambah Property ke Instance Object
 */
arief.sayBye = function () {
    console.info("Selamat Tinggal.");
};

/**
 * Menambahkan Property ke Prototype
 */
Person.prototype.sayBye = function () {
    console.info("Good Bye.");
};

Person.prototype.run = function () {
    console.info(`${this.firstName} is running.`);
};

arief.sayBye();
arief.run();
hilmi.sayBye();
hilmi.run();