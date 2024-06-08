/**
 * Prototype Inheritance Benar (1)
 */
{
    function showConsoleInfo(object) {
        console.info(object);
    }

    function Employee(name) {
        this.name = name;
    }

    function Manager(name) {
        this.name = name;
    }

    Manager.prototype = Object.create(Employee.prototype);

    Manager.prototype.sayHello = function (name) {
        console.info(`Hello ${name}! my name is Manager ${this.name}`);
    };

    Employee.prototype.sayHello = function (name) {
        console.info(`Hello ${name}! my name is Employee ${this.name}`);
    };

    /**
     * Prototype Inheritance Benar (2)
     */
    const employee = new Employee("Arief");
    employee.sayHello("Hilmi");

    const manager = new Manager("Hilmi");
    manager.sayHello("Arief");

    showConsoleInfo(employee);
    showConsoleInfo(manager);
}
