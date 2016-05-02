'use strict';

var oldArray = [1,2,3];
var concatMe = [4,5,6];

var newArray = oldArray.concat(concatMe);
console.log(newArray);

newArray = newArray.concat(7,8,9,['a','b','c']);
console.log(newArray);