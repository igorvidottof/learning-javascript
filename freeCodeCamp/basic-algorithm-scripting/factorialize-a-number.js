'use strict';

function factorialize(num) {
  var fac = 1;
  for(var i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
}

console.log(factorialize(5));