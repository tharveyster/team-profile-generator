const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlGenerator = require("./src/htmlGenerator");

const team = [];

const teamManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
            validate: (managerName) => {
                if (managerName.length < 1) {
                    return console.log("The manager's name is required.");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s employee ID?',
            validate: (managerId) => {
                if (managerId.length < 1) {
                    return console.log("The manager's ID is required.")
                } else if (isNaN(managerId)) {
                    return console.log("The manager's ID must be a number.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email address?',
            validate: (email) => {
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (!valid) {
                    return console.log('You must enter a valid email address.')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            validate: (officeNumber) => {
                if (officeNumber.length < 1) {
                    return console.log("The manager's office number is required.")
                } else if (isNaN(officeNumber)) {
                    return console.log("The manager's office number must be a number.")
                } else {
                    return true;
                }
            }
        },
    ])
    .then(managerInfo => {
        const  { name, id, email, officeNumber } = managerInfo; 
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager); 
        console.log(manager); 
    })
}

const teamEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the team member\'s name?',
            validate: (name) => {
                if (name.length < 1) {
                    return console.log("The name is required.");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team member\'s employee ID?',
            validate: (employeeId) => {
                if (employeeId.length < 1) {
                    return console.log("The employee ID is required.")
                } else if (isNaN(employeeId)) {
                    return console.log("The employee ID must be a number.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team member\'s email address?',
            validate: (email) => {
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (!valid) {
                    return console.log('You must enter a valid email address.')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
            when: (input) => input.role === "Engineer",
            validate: (github) => {
                if (github.length < 1) {
                    return console.log("The engineer's GitHub username is required.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of the intern\'s school?',
            when: (input) => input.role === "Intern",
            validate: (school) => {
                if (school.length < 1) {
                    return console.log("The intern's school name is required.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeInfo => {
        let  { name, id, email, role, github, school, confirmAdd } = employeeInfo; 
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        team.push(employee);
        console.log(team);

        if (confirmAdd) {
            return teamEmployee(team);
        } else {
            return team;
        }

    })
}

teamManager()
    .then(teamEmployee);