const Employee = require('./Employee');

class Intern extends Employee {
    // also have school
    // getSchool()
    // getRole() will be overridden to return 'Intern'
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    };

    getSchool() {
        return this.school
    };

    getRole() {
        return "Intern"
    };
};

module.exports = Intern;