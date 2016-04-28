'use strict';

// Array.reduce() condenses an array into a single value.
var numbers = [4,5,6,7,8];
var singleVal = 0;

singleVal = numbers.reduce(function(prevVal, currVal) { // .reduce(callback, initialVal)
  return prevVal + currVal;
}, 0); 

console.log(singleVal); // 30 

singleVal = numbers.reduce(function(prevVal, currVal) { // .reduce(callback, initialVal)
  return prevVal + currVal;
}, 15); 

console.log(singleVal); // 45 

var nestedArrays = [ [1,2,3], [4,5,6], [7,8,9] ];
var singleArray = nestedArrays.reduce(function(prev, curr) {
  return prev.concat(curr);
}, []); 

console.log(singleArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
