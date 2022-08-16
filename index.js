const inquirer = require("inquirer");

const questions = require("./utils/questions");
const { writeFile } = require("./utils/generateFile");
const {
  generateMarkdown,
  generateMarkdownOld,
} = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // output.push(response.title);
    const markdown = generateMarkdownOld(response);
    console.log("response: ", response);
    writeFile("./output/README.md", markdown);
  });
}

// Function call to initialize app
init();
