const Intern = require("../lib/Intern");

test('getRole should return "Intern"', () => {
    const testRole = "Intern";
    const intern = new Intern('Bart', 3, 'bart@simpsons.com', 'Springfield Elementary');
    expect(intern.getRole()).toBe(testRole);
})