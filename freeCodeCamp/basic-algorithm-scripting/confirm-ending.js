'use strict';

function confirmEnding(str, target) {
  // sets start as a negative number to start the extraction from the end of the string
  var ending = str.substr(-target.length); // substr(start, length)
  return ending === target;
}

// tests
console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding("He has to give me a new name", "me"));
console.log(confirmEnding("He has to give me a new name", "em"));
