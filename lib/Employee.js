// TODO: Write code to define and export the Employee class
// let e = new Employee();
// do we need to define e??

// create employee class to include name, id and email
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;