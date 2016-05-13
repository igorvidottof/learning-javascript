'use strict';

function mutation(arr) {
  var newArr = arr.map(function(value) {
    return value.toLowerCase();
  });

  for(var i = 0; i < newArr[1].length; i++) {
    if(newArr[0].indexOf(newArr[1][i]) === -1) {
      return false;
    }
  }
  return true;
}
// tests
console.log(mutation(["hello", "hey"]));
console.log(mutation(['Mary', 'Aarmy']));