// TODO: Include packages needed for this application
// inquirer will be needed to create the questions 
// file system will be needed to write the README.md file
const inquirer = require('inquirer');
const fs = require('fs');

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
      type: 'list',
      name: 'license',
      message: 'What type of license does your project have?',
      choices: [',',''],
      default: 'MIT',
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
