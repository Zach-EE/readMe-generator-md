
//* Generates Markdown for the ReadMe File
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Usage Information](#usage)
  - [Contribution Guidelines](#contribution)
  - [Test Instructions](#test)
  - [Contact](#email)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}
  
  ## Contribution Guidelines
  ${data.contribution}

    ## Test Instructions
  ${data.test}

  ## License 
  ${data.license}
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ## Questions? Contact: 
  - Email: ${data.email}
  - Github: ${data.github}


`;
}

module.exports = generateMarkdown;
