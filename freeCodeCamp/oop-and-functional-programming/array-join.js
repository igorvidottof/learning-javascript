'use strict';

var str = ['Join', 'me', 'into', 'a', 'string'];
var joinedString = str.join(); // 'Join,me,into,a,string'
console.log(joinedString); 
joinedString = str.join(' '); // 'Join me into a string'
console.log(joinedString);
joinedString = str.join(' + '); // 'Join + me + into + a + string'
console.log(joinedString);