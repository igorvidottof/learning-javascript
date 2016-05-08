'use strict';

function largestOfFour(arr) {
  var newArr = [];
  var largest = 0;
  for(var i = 0; i < arr.length; i++) { // loop through the arrays
    largest = arr[i][0]; // assign the first element of the array to largest
    for(var j = 1; j < arr[i].length; j++) { // loop through the numbers of each array
      if(arr[i][j] > largest) { // verify if the number is greater than the largest
        largest = arr[i][j]; 
      }
    }
    newArr.push(largest); // push the largest value of the array
  }
  return newArr;
}

// test
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));