'use strict';

var str = 'Split me into an array';

// String.split(separator, limit)
var strArray = str.split();
console.log(strArray);

strArray = str.split('');
console.log(strArray);

strArray = str.split(' ');
console.log(strArray);

strArray = str.split(' ', 2);
console.log(strArray);

// Test whether a string is a palindrome
str = 'abc';
var reversedStr = str.split('').reverse().join('');
console.log(str === reversedStr);

str = 'ana';
var reversedStr = str.split('').reverse().join('');
console.log(str === reversedStr);