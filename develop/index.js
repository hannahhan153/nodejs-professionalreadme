// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown= require('./utils/generateMarkdown');


// Create an array of questions for user input
// const questions = [];
inquirer.prompt([
    // title
    {
        type: "input",
        name: "project",
        message: "What is the title of your project called?",
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false; 
            }
        }
    },
    // sections on description, installation instructions, usage information, contribution guidelines, and test instructions
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "Give usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github account name? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github account.');
                return false;
            }
        }
    }
    // Create a function to write README file
]).then(answers => {
    
    fs.writeFile("README.md", `# ${answers.project}\n## Description\n#### ${answers.description}\n ## Installation Instructions\n #### ${answers.installation}\n ## Usage Information\n #### ${answers.usage}\n ## Contribution Guidelines\n #### ${answers.contribution}\n ## Test Instructions\n #### ${answers.test}\n ## Questions\n #### ${answers.github}\n #### https://github.com/${answers.github}`, (err) => {
        if(err) throw err
    });
}).catch(err => {
    if (err) throw err
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

