/*eslint-disable no-console, no-alert*/

//string.slice(indexInicio) 
//string.slice(indexInicio, indexFim+1) 

var firstName = 'iGoR';

var firstChar = firstName.slice(0,1);
var otherChars = firstName.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();

firstName = firstChar + otherChars;

console.log(firstName);
console.log(firstName.length);

