'use strict';

var oldArray = [1,2,3,4,5];

/* 
Array.map() access every element in this array and creates a new array
with all changes
*/
var newArray = oldArray.map(function(val, index) { // (curValue, index, originalArray)
  return index + " = " + (val + 3);
});

console.log(newArray);