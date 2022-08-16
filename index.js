// require for inquirer and links the questions, genrateFile, and generateMarkdown files.
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const { writeFile } = require("./utils/generateFile");
const {
  generateMarkdown,
  generateMarkdownOld,
} = require("./utils/generateMarkdown");

// Starts the app when initialized and starts inquirer and writes the file with content from generateMarkdown to a README.d in output folder.
function init() {
  inquirer.prompt(questions).then((response) => {
    const markdown = generateMarkdownOld(response);
    console.log("response: ", response);
    // writeFile("./output/README.md", markdown);
    writeFile(response.title, markdown);
  });
}

// Function call to initialize app
init();
