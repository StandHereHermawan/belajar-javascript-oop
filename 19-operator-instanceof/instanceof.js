/**
 * Operator instanceof
 */
{
    class Employee {}

    class Manager {}

    const arief = new Employee();
    const arif = new Manager();

    console.info(`arief instanceof Employee: ${arief instanceof Employee}`); // true
    console.info(`arief instanceof Manager: ${arief instanceof Manager}`); // false
    console.info(`arif instanceof Employee: ${arif instanceof Employee}`); // false
    console.info(`arif instanceof Manager: ${arif instanceof Manager}`); // true
}

/**
 * Operator instanceof di inheritance
 */
{
    class Employee {}

    class Manager extends Employee {}

    const arief = new Employee();
    const arif = new Manager();

    console.info(`arief instanceof Employee: ${arief instanceof Employee}`); // true
    console.info(
        `arief instanceof Manager extends Employee: ${arief instanceof Manager}` // false
    );
    console.info(`arif instanceof Employee: ${arif instanceof Employee}`); // true, karena manager extends Employee
    console.info(
        `arif instanceof Manager extends Employee: ${arif instanceof Manager}` // true
    );
}
