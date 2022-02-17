// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require('./utils/generateMarkdown');


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
    // choose a license for application from list of options
    {
        type: 'list',
        name: 'license',
        message: 'Which open source or open data license would you like to proceed with?',
        choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'The Organization for Ethical Source', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'Sil', 'Zlib']
    },
    // github username and link to profile
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
    },
    // email address 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    }
    // Create a function to write README file
]).then(answers => {

    var license 

    ['Apache','Boost', 'BSD', 'Eclipse', 'GNU', 'The Organization for Ethical Source', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'Sil', 'Zlib']
    switch (answers.license) {
        case "Boost":
            license = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            break;
        case "BSD":
            license = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        case "Apache":
            license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case "Eclipse":
            license = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
            break;
        case "GNU":
            license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case "The Organization for Ethical Source":
            license = '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)'
            break;
        case "IBM":
            license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            break;
        case "MIT":
            license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case "Mozilla":
            license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        case "Open Data Commons":
            license = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
            break;
        case "Perl":
            license = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
            break;
        case "Sil":
            license = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
            break;
        case "Zlib":
            license = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
            break;
        default:
            break;
    }

    fs.writeFile("README.md", ` # ${answers.project}\n### Description\n ${license}\n #### ${answers.description}\n### Installation Instructions\n#### ${answers.installation}\n### Usage Information\n#### ${answers.usage}\n### Contribution Guidelines\n#### ${answers.contribution}\n### Test Instructions\n#### ${answers.test}\n### License\n ${answers.license}\n### Questions\n#### Github username: ${answers.github}\n#### https://github.com/${answers.github}\n#### If you have any additional questions, you can email me at this clickable link\n ${answers.email}\n `, (err) => {
        if(err) throw err
    });
}).catch(err => {
    if (err) throw err
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();