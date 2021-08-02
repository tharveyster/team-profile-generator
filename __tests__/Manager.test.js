const Manager = require("../lib/Manager");

test('getRole should return "Manager"', () => {
    const testRole = "Manager";
    const manager = new Manager('Homer', 1, 'homer@simpsons.com', 742);
    expect(manager.getRole()).toBe(testRole);
})