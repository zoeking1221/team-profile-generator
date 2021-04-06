const Engineer = require('../lib/Engineer');

// can assign github username
test('can assign github username to class', () => {
    const engineer = new Engineer("Wilson", "01", "test@test.com", "wilson1221");

    expect(engineer.github).toBe("wilson1221");
})

// getGithub() gets employee github username
test('can get email using getGithub()', () => {
    const engineer = new Engineer("Wilson", "01", "test@test.com", "wilson1221");

    expect(engineer.getGithub()).toBe("wilson1221");
})


// getRole returns "Engineer"
test('getRole() function returns Engineer', () => {
    const engineer = new Engineer("Wilson", "01", "test@test.com", "wilson1221");

    expect(engineer.getRole()).toBe("Engineer");
})

