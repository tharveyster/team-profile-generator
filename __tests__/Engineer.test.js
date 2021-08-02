const Engineer = require("../lib/Engineer");

test('getName should return "Marge"', () => {
    const name = "Marge";
    const engineer = new Engineer('Marge', 2, 'marge@simpsons.com', 'marge-simpson');
    expect(engineer.getName()).toBe(name);
})

test('getId should return "2"', () => {
    const id = 2;
    const engineer = new Engineer('Marge', 2, 'marge@simpsons.com', 'marge-simpson');
    expect(engineer.getId()).toBe(id);
})

test('getEmail should return "marge@simpsons.com"', () => {
    const email = 'marge@simpsons.com';
    const engineer = new Engineer('Marge', 2, 'marge@simpsons.com', 'marge-simpson');
    expect(engineer.getEmail()).toBe(email);
})

test('getRole should return "Engineer"', () => {
    const testRole = "Engineer";
    const engineer = new Engineer('Marge', 2, 'marge@simpsons.com', 'marge-simpson');
    expect(engineer.getRole()).toBe(testRole);
})

test('getGithub should return "marge-simpson"', () => {
    const github = "marge-simpson";
    const engineer = new Engineer('Marge', 2, 'marge@simpsons.com', 'marge-simpson');
    expect(engineer.getGithub()).toBe(github);
})