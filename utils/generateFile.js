const fs = require("fs");

function writeFile(path, content) {
  // TODO: create a file in the output folder
  //console.log("something happened");
  fs.appendFile(path, JSON.stringify(content, "/t"), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
module.exports = {
  writeFile,
};
