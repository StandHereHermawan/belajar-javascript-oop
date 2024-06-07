/**
 * Property di Constructor Function.
 */
function Person() {
    this.firstName = "",
    this.lastName = ""
}

function showConsoleLogObject(object) {
    console.log(object);
}

const arief = new Person();
arief.firstName = "Arief";
arief.lastName = "Hermawan";

const hilmi = new Person();
hilmi.firstName = "Hilmi";
hilmi.lastName = "Muharrom";

showConsoleLogObject(arief);
showConsoleLogObject(hilmi);