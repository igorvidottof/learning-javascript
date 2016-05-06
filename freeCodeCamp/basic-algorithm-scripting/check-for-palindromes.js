'use strict';

function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g; // matches all non-alphanumeric characters
  str = str.replace(re, '').toLowerCase(); 
  var reversedStr = str.split('').reverse().join(''); 
  return str === reversedStr;
}

// tests
console.log(isPalindrome("0_0 (: /-\ :) 0-0"));
console.log(isPalindrome('eye'));
console.log(isPalindrome('cat'));