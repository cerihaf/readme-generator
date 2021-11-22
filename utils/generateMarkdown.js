// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Grabbed a few from here: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const badge = {
    Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Boost: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    Eclipse: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  };

  switch(license){
    case "Apache":
      return badge.Apache;
      break;
    case "Boost":
      return badge.Boost;
      break;
    case "Eclipse":
      return badge.Eclipse;
      break;
    case "GNU":
      return badge.GNU;
      break;
    case "MIT":
      return badge.MIT;
      break;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `## License

${renderLicenseLink(license)}

${renderLicenseBadge(license)}
    `
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)


## Installation

${data.installation}


## Usage 

${data.usage}


## Credits

${data.credits}


${renderLicenseSection(data.license)}
## Questions
If you have any questions, please reach out to me at: [${data.email}](mailto:${data.email}) OR [github.com/${data.username}](https://github.com/${data.username})

## Features

${data.features}


## Contributing

${data.contribute}


## Tests

${data.tests}

`;
}

module.exports = generateMarkdown;
