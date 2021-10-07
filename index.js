// TODO: Include packages needed for this application
// inquirer will be needed to create the questions as a third party module 
// file system will be needed to write the README.md file as a core module
// generateMarkdown will be needed as a local module
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
      default: 'Project_Title',

    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description?',
      default: '',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
      default: '',
    },
    {
      
      type: 'input',
      name: 'usage',
      message: 'Enter usage information',
      default: '',

    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
      default: '',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter the tests instructions',
      default: '',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project have?',
        choices: ['MIT','GNU GPLv3','Apache'],
        default: '',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        default: '',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        default: '',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('success')); 
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      let markdown = generateMarkdown(data);
      writeToFile('sampleREADME.md',markdown);
    });
}

// Function call to initialize app
init();
