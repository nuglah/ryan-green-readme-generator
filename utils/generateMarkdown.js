// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  if ("title" in data) {
    return `#${data.title}`;
  }
  if ("description" in data) {
    return `#${data.description}`;
  }
  if ("installation" in data) {
    return `#${data.installation}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdownOld(data) {
  return `# ${data.title}
  # Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

${response.username}
##username:

    ${response.description}
##description:

    ${response.installation}
##installation:

    ${response.usage}
##usage:

    ${response.licenses}
##licenses:

    ${response.contribution}
##contribution:

    ${response.test}
##test:

    ${response.email}
##email:

    ${response.profile}
##profile:


`;
}

module.exports = {
  generateMarkdown,
};
