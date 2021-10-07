// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
    case 'GNU GPLv3':
      badge ='[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
    break;
    case 'Apache':
      badge ='[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;    
    default: 
    badge = '';    
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license) {

    case 'MIT':
      link = 'https://choosealicense.com/licenses/mit/';
    break;

    case 'GNU GPLv3':
      link ='https://choosealicense.com/licenses/gpl-3.0/';
    break;

    case 'Apache':
      link ='https://choosealicense.com/licenses/apache-2.0/';
    break;    

    default: 
    link = '';   
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
          return `This project is licensed under the terms of the ${license} license.`;
  } return '';  
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {     // Should I do an fs.appendFile() inside this function?
  let ba = renderLicenseBadge(data.license);
  let li = renderLicenseLink(data.license);
  let section = renderLicenseSection(data.license);
  
  return `
  # ${data.title}
  ${ba}
  
  # Description 
  ${data.description} 

  # Installation  
  ${data.installation}

  # Usage  
  ${data.usage}
  
  # Contributing  
  ${data.contributing}
  
  # Tests  
  ${data.test}
  
  # License
  ${section}
  ${ba}
  ${li}
  
  # GitHub Username  
  ${data.github}
  
  # email
  ${data.email}
`;
}

module.exports = generateMarkdown;
// module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;

