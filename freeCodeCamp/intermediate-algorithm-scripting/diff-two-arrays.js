'use strict';

function diffArray(arr1, arr2) {
  var newArr = [];
  var newArr2 = [];
  // filter values that is in the first array, but not in the second
  newArr = arr1.filter(function(val) {
    return arr2.indexOf(val) === -1;
  });  

  // filter values that is in the second array, but not in the first
  newArr2 = arr2.filter(function(val) {
    return arr1.indexOf(val) === -1;
  });
  
  return newArr.concat(newArr2);
}

// tests
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));