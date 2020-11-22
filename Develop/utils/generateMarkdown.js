// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![](https://img.shields.io/badge/license-${data.license}-green)

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#Installation)

  *[Usage](#Usage)

  *[Contributing](#Contributing)

  *[Tests](#Tests)

  ## Installation

  ${data.installInstructions}

  ## Usage

  ${data.usageInstructions}

  ![Screenshot](${data.screenshot})

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.testInstructions}

  ## License
  
  This project is covered under the ${data.license} license.
  ## Questions

  [Link to my Github](https://github.com/${data.github})

  If you have any questions you can reach me at my [email address](${data.email})

`;
}

module.exports = generateMarkdown;
