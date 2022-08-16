// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  return `# ${response.title}

  ##Description: ${response.description}


  # Table of Content
-[Installation](#Installation)
-[Usage](#Usage)
-[Licenses](#Licenses)
-[Contributing](#Contributing)
-[Test](#Test)
-[Questions](#Questions)




    


    
##Installation: ${response.installation}

   
##Usage:  ${response.usage}

    
##Licenses: ${response.licenses}

    
##Contributing: ${response.contribution}

    
##Test: ${response.test}

##username: ${response.username}

    
##email: ${response.email}

    
##profile: ${response.profile}


`;
}

module.exports = {
  generateMarkdownOld,
};
