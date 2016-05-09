'use strict';

function repeatStringNumTimes(str, num) {
  var newStr = '';
  if(num > 0) {
    for(var i = 1; i <= num; i++) {
      newStr += str;
    }
    return newStr;
  }
  else {
    return '';
  }
}

// tests
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -3));
