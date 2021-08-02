const Employee = require("../lib/Employee");

test('getName should return "Homer"', () => {
    const name = "Homer";
    const employee = new Employee('Homer', 1, 'homer@simpsons.com');
    expect(employee.getName()).toBe(name);
})

test('getId should return "1"', () => {
    const id = 1;
    const employee = new Employee('Homer', 1, 'homer@simpsons.com');
    expect(employee.getId()).toBe(id);
})

test('getEmail should return "homer@simpsons.com"', () => {
    const email = 'homer@simpsons.com';
    const employee = new Employee('Homer', 1, 'homer@simpsons.com');
    expect(employee.getEmail()).toBe(email);
})

test('getRole should return "Employee"', () => {
    const role = 'Employee';
    const employee = new Employee('Homer', 1, 'homer@simpsons.com');
    expect(employee.getRole()).toBe(role);
})