'use strict';

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

// tests
console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 9));
console.log(slasher([1, 2, 3], 4));
console.log(slasher(["burgers", "fries", "shake"], 1));
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));