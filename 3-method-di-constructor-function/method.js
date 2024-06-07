/**
 * Method di Constructor Function.
 */
function Person() {
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function (name) {
        console.info(`Hello ${name}, My name is ${this.firstName}`);
    };
}

function showConsoleLogObject(object) {
    console.log(object);
}

const fatan = new Person();
fatan.firstName = "Fatan";
fatan.lastName = "Basyari";
fatan.sayHello("Erlang");

const arif = new Person();
arif.firstName = "Arif";
arif.lastName = "Setiawan";
arif.sayHello("Indra");

showConsoleLogObject(fatan);
showConsoleLogObject(arif);
