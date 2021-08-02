const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
            name: 'office',
            message: 'What is the manager\'s office number?',
            validate: (office) => {
                if (office.length < 1) {
                    return console.log("The manager's office number is required.")
                } else if (isNaN(office)) {
                    return console.log("The manager's office number must be a number.")
                } else {
                    return true;
                }
            }
        }
    ])
}

teamManager();