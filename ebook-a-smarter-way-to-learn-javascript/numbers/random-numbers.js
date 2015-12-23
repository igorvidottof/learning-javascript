/*eslint-disable no-console, no-alert*/

// Randomic Number from 1 to 100

// to generate random numbers we need to follow some steps:

// generate a pseudo-random and assign it to a variable
var pseudoNum = Math.random();
console.log(pseudoNum);

// multiply the pseudo-random by a number which you want to be the higher and adds 1 to the result
var improvedNum = (pseudoNum * 100) + 1;
console.log(improvedNum);

// Round down the improved number
var finalNum = Math.floor(improvedNum);
console.log(finalNum);

// or do it in a single statement

var randomNum = Math.floor((Math.random()*100) + 1);
console.log(randomNum);
