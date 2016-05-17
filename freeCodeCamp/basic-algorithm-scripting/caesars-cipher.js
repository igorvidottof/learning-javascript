'use strict';

function rot13(str) { 
  var re = /[A-Z]/;
  var newStr = '';
  for(var i = 0; i < str.length; i++) {
    if(re.test(str[i])) { // test if it's a letter
      if(str.charCodeAt(i) <= 77) // char code 77 = M
        newStr += String.fromCharCode(str.charCodeAt(i) + 13);
      else {
        newStr += String.fromCharCode(str.charCodeAt(i) - 13);
      }
    } 
    else { // if it's not a letter  
      newStr += str[i]; // add the symbol or space 
    }
  }  
  return newStr;
}

// tests
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13('LBH QVQ VG!'));


