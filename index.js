const inquirer = require("inquirer");

const questions = require("./utils/questions");
const { writeFile } = require("./utils/generateFile");
const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // output.push(response.title);
    const line = generateMarkdown(response);
    console.log("line: ", line);
    writeFile("./RYANREADME.md", line);
  });
}

// Function call to initialize app
init();
