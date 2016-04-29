'use strict';

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// filtering numbers less than 6
var newArray = oldArray.filter(function(val) {
  return val < 6;
});
console.log(newArray);

// filtering even numbers
var evenNumbers = oldArray.filter(function(val) {
  return val % 2 === 0;
});
console.log(evenNumbers);
