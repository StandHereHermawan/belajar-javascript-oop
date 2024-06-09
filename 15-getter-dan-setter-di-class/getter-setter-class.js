/**
 * Getter dan setter
 */
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(nameArrayWithWhiteSpace){
        const result = nameArrayWithWhiteSpace.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

function showObjectWithFullName(object) {
    console.info(object);
    console.info(object.fullName);    
}

const arif = new Person();
arif.fullName = "Arif Setiawan";
showObjectWithFullName(arif);

arif.fullName = "Arief Hermawan";
showObjectWithFullName(arif);
