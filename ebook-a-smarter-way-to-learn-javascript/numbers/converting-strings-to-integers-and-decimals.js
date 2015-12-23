/*eslint-disable no-console, no-alert*/

/*
 Sometimes it happens to you to need to convert a string to an Integer or a Decimal.
 That's why JS provides two functions to do that, parseInt(string) and parseFloat(string)
*/

/*
  One case of that is when you ask for a user to enter a number via prompt.
  The prompt function will always return a string, even though you've asked for a number.
  In these cases you need to convert the string to handle it.
*/

/* For instance, you've asked a number through prompt for the user, and he 
    entered '19'. Now let's try to add 1 to his "number"
*/

var userAge = '19';

console.log(userAge + 1); //of course it'll be a string

// How to handle that?

var ageNextYear = parseInt(userAge) + 1;
console.log(ageNextYear); //Now, it's right!

// Ok, that's quite simple! hahaha I wonder if it really is 
// Let us now convert a string that has a decimal number using parseInt()

var trickyNum = 1.99999;

console.log(parseInt(trickyNum)); // Now I have 2, right? errrrrh nope! You have 1! That happens because parseInt() just maintain the Integer part and ignores all the rest

// In these cases, to preserve the decimal numbers, we need to use the function parseFloat()

console.log(parseFloat(trickyNum)); // yay!