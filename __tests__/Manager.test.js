const Manager = require("../lib/Manager");

test('getName should return "Homer"', () => {
    const name = "Homer";
    const manager = new Manager('Homer', 1, 'homer@simpsons.com');
    expect(manager.getName()).toBe(name);
})

test('getId should return "1"', () => {
    const id = 1;
    const manager = new Manager('Homer', 1, 'homer@simpsons.com');
    expect(manager.getId()).toBe(id);
})

test('getEmail should return "homer@simpsons.com"', () => {
    const email = 'homer@simpsons.com';
    const manager = new Manager('Homer', 1, 'homer@simpsons.com');
    expect(manager.getEmail()).toBe(email);
})

test('getRole should return "Manager"', () => {
    const testRole = "Manager";
    const manager = new Manager('Homer', 1, 'homer@simpsons.com', 742);
    expect(manager.getRole()).toBe(testRole);
})

test('getOfficeNumber should return 742', () => {
    const office = 742;
    const manager = new Manager('Homer', 1, 'homer@simpsons.com', 742);
    expect(manager.getOfficeNumber()).toBe(office);
})