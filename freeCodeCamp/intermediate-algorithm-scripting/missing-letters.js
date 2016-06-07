'use strict';

function fearNotLetter(str) {
  var firstCharCode = str.charCodeAt(0);
  var currCharCode = 0;
  var nextCharCode = 0;
  
  for(var i = 1; i < str.length; i++) {
    currCharCode = str.charCodeAt(i);
    nextCharCode = firstCharCode + i;
    if(currCharCode !== nextCharCode) {
      return String.fromCharCode(nextCharCode);
    }
  }
  return undefined;
}

// tests
console.log(fearNotLetter("bcd"));
console.log(fearNotLetter("abce"));