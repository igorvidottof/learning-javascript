'use strict';

// Generating random whole numbers
var randomNum = Math.floor(Math.random() * 20); // 0 ~ 19
console.log(randomNum);

randomNum = Math.floor(Math.random() * 20 + 1); // 1 ~ 20
console.log(randomNum);

// Generating random whole numbers within a range
function randomRange(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min); 
}
console.log(randomRange(5, 15)); // Math.floor(0 ~ 10) + 5 = 5 ~ 15