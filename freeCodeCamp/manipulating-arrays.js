'use strict';

var myArray = [['John', 23], ['cat', 2]];

//Adding to the end
myArray.push(['dog', 3]);
console.log(myArray);

//Removing from the end
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

//Adding to the beginning
myArray.unshift(["Paul", 35]);
console.log(myArray);

//Removing from the beginning 
removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

