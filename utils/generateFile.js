const fs = require("fs");

function writeFile(path, content) {
  // TODO: create a file in the output folder
  //console.log("something happened");
  fs.appendFile(path, content, function (err) {
    if (err) throw err;
    console.log("README.md Generated.");
  });
}
module.exports = {
  writeFile,
};
