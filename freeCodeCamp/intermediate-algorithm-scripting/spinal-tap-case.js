'use strict';

// first solution
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

// second solution
function spinalCase(str){
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase();
}

// tests
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));