'use strict';

var people = ['Zarate', 'Igor', 'Ash', 'Junior'];

/* When a function sort is called without parameters it converts the values 
into strings and then compare them in Unicode code point order*/
people.sort(); 
console.log(people); // [ 'Ash', 'Igor', 'Junior', 'Zarate' ]

var numbers = [30,2,4,10];
numbers.sort(); 
console.log(numbers); // [ 10, 2, 30, 4 ]

// Sort ascending
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [ 2, 4, 10, 30 ]

// Sort descending
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers); // [ 30, 10, 4, 2 ]

