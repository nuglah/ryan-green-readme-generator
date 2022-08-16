const fs = require("fs");

// Function to put the content from generateMarkdown and writefile.
function writeFile(path, content) {
  // TODO: create a file in the output folder
  fs.appendFile(path, content, function (err) {
    if (err) throw err;
    console.log("README.md Generated.");
  });
}
module.exports = {
  writeFile,
};
