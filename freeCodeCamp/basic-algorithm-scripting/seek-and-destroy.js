'use strict';

function destroyer(arr) {
  var args = Array.from(arguments).slice(1); // create an array with the arguments
  return arr.filter(function(val) {
    return args.indexOf(val) === -1; // return the values that aren't in the args-array
  });
}

// test
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));