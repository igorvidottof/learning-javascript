/*eslint-disable no-console, no-alert*/

//Extracting the first and last letters from a string

var name = 'Igor';
var firstChar = name.charAt(0);
var lastChar = name.charAt(name.length-1);

console.log(name);
console.log(firstChar);
console.log(lastChar);

//Finding a specific character within a string

name += ' Vidotto, Felipe';

for (var i=0; i<name.length; i++) {
  if (name.charAt(i) === ',') {
    console.log('Comma found at index ' + i);
    break;
  }
} 
