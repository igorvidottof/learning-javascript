/*eslint-disable no-console, no-alert*/

// <number>.toFixed(numPlaces) - decreases the amount of decimal places in a Number, rounds it up and converts it to a string

var bigDecimal = 14.45648;
console.log(bigDecimal.toFixed(2)); 
console.log(bigDecimal.toFixed());

console.log(14.555.toFixed(2)); // unfortunately this is rounded to 14.55

// Here is a way to keep a number as a Number even after to perform the toFixed()
var num = 15.7815412;
num = Number(num.toFixed(2));
console.log(num + 20);