const Engineer = require("../lib/Engineer");

test('getRole should return "Engineer"', () => {
    const testRole = "Engineer";
    const engineer = new Engineer('Marge', 2, 'marge@simpsons.com', 'marge-simpson');
    expect(engineer.getRole()).toBe(testRole);
})