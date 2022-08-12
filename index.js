// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = require("./utils/questions");
const { writeFile } = require("./utils/generateFile");

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  console.log(questions);
  writeFile();
}

// Function call to initialize app
init();
