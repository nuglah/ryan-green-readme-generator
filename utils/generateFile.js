const fs = require("fs");

// Function to put the content from generateMarkdown and writefile.
function writeFile(title, content) {
  // TODO: create a file in the output folder
  if (title !== "") {
    path = `./output/${title.split(` `).join(`_`)}.md`;
  } else {
    path = "./output/README.md";
  }
  fs.appendFile(path, content, function (err) {
    if (err) throw err;
    console.log("README.md Generated.");
  });
}
module.exports = {
  writeFile,
};
