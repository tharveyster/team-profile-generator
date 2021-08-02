const Intern = require("../lib/Intern");

test('getName should return "Homer"', () => {
    const name = "Bart";
    const intern = new Intern('Bart', 3, 'bart@simpsons.com', 'Springfield Elementary');
    expect(intern.getName()).toBe(name);
})

test('getId should return "1"', () => {
    const id = 3;
    const intern = new Intern('Bart', 3, 'bart@simpsons.com', 'Springfield Elementary');
    expect(intern.getId()).toBe(id);
})

test('getEmail should return "homer@simpsons.com"', () => {
    const email = 'homer@simpsons.com';
    const intern = new Intern('Homer', 1, 'homer@simpsons.com', 'Springfield Elementary');
    expect(intern.getEmail()).toBe(email);
})

test('getRole should return "Intern"', () => {
    const testRole = "Intern";
    const intern = new Intern('Bart', 3, 'bart@simpsons.com', 'Springfield Elementary');
    expect(intern.getRole()).toBe(testRole);
})

test('getSchool should return "Springfield Elementary"', () => {
    const school = "Springfield Elementary";
    const intern = new Intern('Bart', 3, 'bart@simpsons.com', 'Springfield Elementary');
    expect(intern.getSchool()).toBe(school);
})