//* Required Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // 1: Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('Project title required');
                return false;
            }

        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`Successful write to: ${fileName}`);
    });
};

// TODO: Create a function to initialize app
function init() {
};

// Function call to initialize app
init();
