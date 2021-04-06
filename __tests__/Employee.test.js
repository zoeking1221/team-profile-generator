
const Employee = require('../lib/Employee');

// can create new employee object
test('creates an employee object', () => {
    const employee = new Employee;

    expect(typeof(employee)).toBe("object");
});

// can assign name
test('can assign employee name to class', () => {
    const employee = new Employee("Eve", "01", "test@test.com");

    expect(employee.name).toBe("Eve");
})

// can assign employee id
test('can assign employee id to class', () => {
    const employee = new Employee("Eve", "01", "test@test.com");

    expect(employee.id).toBe("01");
})

// can assign email
test('can assign employee id to class', () => {
    const employee = new Employee("Eve", "01", "test@test.com");

    expect(employee.email).toBe("test@test.com");
})

// getName() gets employee name
test('can get name using getName()', () => {
    const employee = new Employee("Eve", "01", "test@test.com");

    expect(employee.getName()).toBe("Eve");
})

// getId() gets employee id
test('can get id using getId()', () => {
    const employee = new Employee("Eve", "01", "test@test.com");

    expect(employee.getId()).toBe("01");
})

// getEmail() gets employee email
test('can get email using getEmail()', () => {
    const employee = new Employee("Eve", "01", "test@test.com");

    expect(employee.getEmail()).toBe("test@test.com");
})


// getRole returns "Employee"
test('getRole() function returns Employee', () => {
    const employee = new Employee("Eve", "01", "test@test.com");

    expect(employee.getRole()).toBe("Employee");
})