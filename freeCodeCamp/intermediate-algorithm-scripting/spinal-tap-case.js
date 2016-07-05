'use strict';

function spinalCase(str) {
  var regex = /[a-z][A-Z]/g;
  var regex2 = /[\s_]/g;

  if(regex.test(str)) {
    var matches = str.match(regex);
    matches.forEach(function(match) {
      str = str.replace(match, match.slice(0, 1) + '-' + match.slice(1).toLowerCase());
    });
  }

  return str.replace(regex2, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));