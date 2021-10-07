// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


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
    case 'ISC':
      link ='https://choosealicense.com/licenses/isc/';
    break;
    default: 
    link = '';

    return link;
  }

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
  
  
  return `# ${data.title}
  
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
  ${data.license}
  
  # GitHub Username  
  ${data.github}
  
  # email
  ${data.email}
`;
}

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;

