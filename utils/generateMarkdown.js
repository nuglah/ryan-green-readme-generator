// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if (licenses === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (licenses === "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if (licenses === "BSD") {
    return "BSD-3-Clause";
  }
}

// function generateMarkdown(data) {
//   if ("title" in data) {
//     return `#${data.title}`;
//   }
//   if ("description" in data) {
//     return `#${data.description}`;
//   }
//   if ("installation" in data) {
//     return `#${data.installation}`;
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdownOld(response) {
  console.log(response);
  return `# ${response.title}
   ${renderLicenseBadge(response.licenses)}

  ## Description: ${response.description}


  # Table of Contents
-[Installation](##Installation)
-[Usage](##Usage)
-[Licenses](##Licenses)
-[Contributing](##Contributing)
-[Test](##Test)
-[Questions](##Questions)


# Installation 
${response.installation}

   
# Usage  
${response.usage}

    
# Licenses
${renderLicenseSection(response.licenses)}
${renderLicenseLink(response.licenses)}

    
# Contributing 
${response.contribution}

    
# Test
${response.test}


# Questions

# username
${response.username}

    
# email
${response.email}

    
# profile 
${response.profile}


`;
}

module.exports = {
  generateMarkdownOld,
};
