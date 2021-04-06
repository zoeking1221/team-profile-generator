const Intern = require('../lib/Intern');

// can assign school
test('can assign school to class', () => {
    const intern = new Intern("Megan", "01", "test@test.com", "Coding University");

    expect(intern.school).toBe("Coding University");
})

// getSchool() gets intern's school
test('can get shool using getSchool()', () => {
    const intern = new Intern("Megan", "01", "test@test.com", "Coding University");

    expect(intern.getSchool()).toBe("Coding University");
})


// getRole returns "Intern"
test('getRole() function returns Engineer', () => {
    const intern = new Intern("Megan", "01", "test@test.com", "Coding University");

    expect(intern.getRole()).toBe("Intern");
})

