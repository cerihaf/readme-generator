const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Project Title (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a title!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description' 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation Instructions' 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage' 
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter Credits' 
    },  
    {
        type: 'list',
        name: 'license',
        choices: ['Apache', 'Boost', 'Eclipse', 'GNU', 'MIT']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter Contributions' 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter Tests' 
    },
    {
      type: 'input',
      name: 'features',
      message: 'Enter Features' 
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub Username' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email' 
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // generate text for markdown file
    const markdown = generateMarkdown(data);
    // more on functionality here: https://www.w3schools.com/nodejs/nodejs_filesystem.asp
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log(`
        =================
        README Generated
        =================
        `);
      })
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions)
}

// Function call to initialize app
init().then(data => {return writeToFile("dist/README.md", data)})
