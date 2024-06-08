/**
 * Prototype Inheritance Salah (1)
 */
{
    function Employee(name) {
        this.name = name;
    }

    function Manager(name) {
        this.name = name;
    }

    Manager.prototype = Employee.prototype;

    Manager.prototype.sayHello = function (name) {
        console.info(`Hello ${name}! my name is Manager ${this.name}`);
    };

    Employee.prototype.sayHello = function (name) {
        console.info(`Hello ${name}! my name is Employee ${this.name}`);
    };

    /**
     * Prototype Inheritance Salah (1)
     */
    const employee = new Employee("Arief");
    employee.sayHello("Hilmi");

    const manager = new Manager("Hilmi");
    manager.sayHello("Arief");
}
