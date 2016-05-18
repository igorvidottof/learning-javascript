'use strict';

function sumAll(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var sum = 0;
  for(var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// tests
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));