'use strict';

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

// Tests
console.log(multiplyAll([[1,2],[3,4],[5,6,7]])); // 5040
console.log(multiplyAll([[1],[2],[3]])); // 6
console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])); // 54