const Employee = require('./Employee');

class Engineer extends Employee {
    // also have github
    // getGithub()
    // getRole overridden to return 'Engineer'
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    };

    getGithub() {
        return this.github
    };

    getRole() {
        return "Engineer"
    };
}

module.exports = Engineer;