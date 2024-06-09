/**
 * Public Class Field.
 */
{
    class Customer {
        firstName;
        lastName;
        balance = 0;
    }

    const arif = new Customer();
    console.info(arif);
}

/**
 * Public Class Field dan constructor.
 */
{
    class Customer {
        firstName;
        lastName;
        balance = 0;

        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        sayHello(name) {
            console.info(`Hi ${name}! Customer name is ${this.firstName}`);
        }
    }

    const arief = new Customer("Arief", "Hermawan");
    arief.sayHello("Arif");
    console.info(arief);
}
