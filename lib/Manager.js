const Employee = require('./Employee');

class Manager extends Employee {
    // also have officeNumber
    // getOfficeNumber
    // getRole() will be overridden to return Manager
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;