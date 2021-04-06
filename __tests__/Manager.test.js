const Manager = require('../lib/Manager');

// can assign office #
test('can assign office number to class', () => {
    const manager = new Manager("Zoe", "01", "test@test.com", "07");

    expect(manager.officeNumber).toBe("07");
})

// getOfficeNumber() gets office #
test('can get office number using getOfficeNumber()', () => {
    const manager = new Manager("Zoe", "01", "test@test.com", "07");

    expect(manager.getOfficeNumber()).toBe("07");
})


// getRole returns "Manager"
test('getRole() function returns Engineer', () => {
    const manager = new Manager("Zoe", "01", "test@test.com", "07");

    expect(manager.getRole()).toBe("Manager");
})

