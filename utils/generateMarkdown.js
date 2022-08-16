// Renders the badge for the license at the top of the readme.
function renderLicenseBadge(licenses) {
  if (licenses === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (licenses === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licenses === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }

  return "";
}

// Renders license link in license section
function renderLicenseLink(licenses) {
  if (licenses === "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
  if (licenses === "MIT") {
    return "https://opensource.org/licenses/MIT)";
  }
  if (licenses === "Eclipse") {
    return "https://opensource.org/licenses/EPL-1.0)";
  }
  return "";
}

// Puts name of license in license section.
function renderLicenseSection(licenses) {
  if (licenses === "BSD") {
    return "BSD-3-Clause";
  }
  if (licenses === "MIT") {
    return "The MIT License";
  }
  if (licenses === "Eclipse") {
    return "Eclipse Public License, Version 1.0 (EPL-1.0)";
  }
}

// Renders a link to github page with the github username that is entered.
function renderGithubLink(username) {
  return `https://github.com/${username}`;
}

// Main function that build the content of the readme with the responses you type in the terminal to the inquirer questions.
function generateMarkdownOld(response) {
  console.log(response);
  return `# ${response.title}
   ${renderLicenseBadge(response.licenses)}

  ## Description: 
  ${response.description}


  # Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Licenses](#licenses)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)


# Installation: 
${response.installation}

   
# Usage: 
${response.usage}

    
# Licenses:
${renderLicenseSection(response.licenses)}
${renderLicenseLink(response.licenses)}

    
# Contributing:
${response.contribution}

    
# Test:
${response.test}


# Questions:

## Github Profile:
${renderGithubLink(response.username)}

## Email:
To contact me use the following email address ${
    response.email
  } for any additional questions.

    


`;
}

module.exports = {
  generateMarkdownOld,
};
