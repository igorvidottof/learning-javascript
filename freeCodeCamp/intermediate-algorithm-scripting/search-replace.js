'use strict';

function myReplace(str, before, after) {
  var re = /[A-Z]/;

  if(re.test(before)) {
    var afterCapitalized = after.replace(after[0], after[0].toUpperCase());
    return str.replace(before, afterCapitalized); 
  }
  return str.replace(before, after); 
  
}

// test
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));