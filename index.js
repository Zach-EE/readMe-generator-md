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

        },
    },
    // 2:Project Description
    {

        type: 'input',
        name: 'description',
        message: 'Enter project description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }else {
                console.log('Project description required');
                return false;
            }

        }
    },
     // 3: Project Usage
    {

        type: 'input',
        name: 'usage',
        message: 'Enter usage permissions for application',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else {
                console.log('Project usage required');
                return false;
            }

        }
    },  
     // n: Place holder
     {

        type: 'input',
        name: 'placeHolder',
        message: 'place holder msg',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else {
                console.log('Project placeHolder required');
                return false;
            }

        }
    },      
     // n: Place holder
     {

        type: 'input',
        name: 'placeHolder',
        message: 'place holder msg',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else {
                console.log('Project placeHolder required');
                return false;
            }

        }
    },   
     // n: Place holder
     {

        type: 'input',
        name: 'placeHolder',
        message: 'place holder msg',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else {
                console.log('Project placeHolder required');
                return false;
            }

        }
    }
    //  // n: Place holder
    //  {

    //     type: 'input',
    //     name: 'placeHolder',
    //     message: 'place holder msg',
    //     validate: usageInput => {
    //         if (usageInput) {
    //             return true;
    //         }else {
    //             console.log('Project placeHolder required');
    //             return false;
    //         }

    //     }
    // }                    
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
    inquirer.prompt(questions).then((userInput) => {
        console.log(`input: ${userInput}`);
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
