//* Required Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Developer Email
    {

        type: 'input',
        name: 'email',
        message: 'Enter your email: ',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }else {
                console.log('Enter None or Email');
                return false;
            }
    
        }
    }, 
    // Developer Github
    {

        type: 'input',
        name: 'github',
        message: 'Enter your Github username: ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }else {
                console.log('Enter None or Username');
                return false;
            }
    
        }
    },
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
        message: 'Enter description for project: ',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }else {
                console.log('Project description required');
                return false;
            }

        }
    },
     // 3: Installation Information
    {

        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for project: ',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }else {
                console.log('Installation guide required');
                return false;
            }

        }
    },  
     // 4: Usage Data
     {

        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions for project: ',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else {
                console.log('Enter None for empty');
                return false;
            }

        }
    },      
     // 5: Contribution Guidelines
     {

        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines for project: ',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            }else {
                console.log('Enter None for empty');
                return false;
            }

        }
    },   
     // 6: Testing Steps
     {

        type: 'input',
        name: 'test',
        message: 'Enter application testing project: ',
        validate: testInput => {
            if (testInput) {
                return true;
            }else {
                console.log('Testing Steps Required');
                return false;
            }

        }
    },
    // 7: License Information
    {

    type: 'checkbox',
    name: 'license',
    message: 'Enter creative license for project: ',
    choices: ['Apache','MIT','Mozilla-Public','None'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        }else {
            console.log('License selection is required');
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

//* Function to write data to a desired file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`Successful write to: ${fileName}`);
    });
};

// * Application initialization function
function init() {
    inquirer.prompt(questions).then((userInput) => {
        console.log(`input: ${userInput}`);
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
