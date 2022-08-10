// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicense(license) {
//   if(!license.choices.none) {
//     let badge = `![License Badge][https://img.shields.io/badge/License-${license.choice}-blue.svg]
//     [License Link](https://www.gnu.org/licenses/${license.choice})`
//     return badge;
//   } else {
//     return null;
//   }
// }
function seperateCredits(Credits) {
  let collaborators = `${Credits}`
  const collabArray = collaborators.split(",");
  
  for(let i =0; i < collabArray.length; i++) {
    return `[${collabArray[i]}]`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ![Deployed Application Img](${data.screenShot})
  [Deployed Application Link](${data.deployedLink})
  ${data.usage}
  ## Credits
  ${seperateCredits()}
  ## Questions
  ${data.username}
  ${data.email}
  [Repository Link]{${data.repo}}

`;
}

module.exports = generateMarkdown;
