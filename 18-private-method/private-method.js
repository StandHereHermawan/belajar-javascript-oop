/**
 * Private Method.
 */
class Person {
    say(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.info(`Hi! this is unnamed object Person.`);
    }

    #sayWithName(name) {
        console.info(`Hi! this is ${name} object Person.`);
    }
}

const orang = new Person();
orang.say();
console.info(orang);
orang.say("Root");