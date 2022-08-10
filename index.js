//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



const questions = [
    // Project Title
    {
        type:'input',
        name:'title',
        message:'Please enter the name of the project:',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Project must have a title!');
                return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name:'description',
        message:'Why did you build this project? Or what problem does it solve?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Project must have a description!');
                return false;
            }
        }
    },
    // Installation
    {
        type:'input',
        name:'installation',
        message:'Enter installation instructions:'
    },
    // Usage
    {
        type:'input',
        name:'screenShot',
        message:'Enter the link for the deployed application image:'
    },
    {
        type:'input',
        name:'deployedLink',
        message:'Enter the link to the deployed application:'
    },
    {
        type:'input',
        name:'usage',
        message: 'Enter instructions for use:'
    },
    // Credits
    {
        type:'input',
        name:'credits',
        message:'Separated by a comma enter collaborator link(s):',
    },
    // Questions
    {
        type:'input',
        name:'username',
        message:'Enter your github username:'
    },
    {
        type:'input',
        name:'email',
        message:'Enter your email address:'
    },
    {
        type:'input',
        name:'repo',
        message:'Enter a link to your github repository:'
    },
    // License 
    {
        type:'list',
        name: 'license',
        message: 'Select project license type:',
        choices: ['Apache',
        'MIT',
        'GNU',
        'None' ]
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Success!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

//Function call to initialize app
init();
