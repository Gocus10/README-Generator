const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:', 
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description for your project!');
              return false;
            }
          } 
      },
      {
        type: 'input',
        name: 'installInstructions',
        message: 'Provide installation instructions for your project:', 
        validate: installInput => {
            if (installInput) {
              return true;
            } else {
            console.log('Please enter installation instructions for your project!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usageInstructions',
        message: 'Provide usage instructions for your project:', 
        validate: usageInstructions => {
            if (usageInstructions) {
              return true;
            } else {
            console.log('Please enter installation instructions for your project!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'Screenshot',
        message: 'Provide relative link for screenshot of project: (Optional)'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for other developers to contribute to this project:', 
        validate: contributing => {
            if (contributing) {
              return true;
            } else {
            console.log('Please enter contribution guidelines for your project!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Provide instructions on testing your project: (Optional)'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project',
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'ISC']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: gitUserInput => {
          if (gitUserInput){
            return true;
          }
          else{
            console.log('Please enter your GitHub Username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput){
              return true;
            }
            else{
              console.log('Please enter your email address!');
              return false;
            }
          }
      },

];
const generateMarkdown = require('../Develop/utils/generateMarkdown.js');
// function to write README file
const writeToFile = function(passedData){
fs.writeFile('GeneratedREADME.md', generateMarkdown(passedData), err =>{
    if(err) throw err;
    console.log('Readme complete! Check out readme.md to see the output!');
})
}
// function to initialize program
function init() {
return inquirer.prompt(questions).then(data =>{
    writeToFile(data);

})

}

// function call to initialize program
init();
