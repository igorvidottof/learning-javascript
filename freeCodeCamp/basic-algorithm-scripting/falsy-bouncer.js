'use strict';

function bouncer(arr) {
  return arr.filter(function(value) {
    return !!value;
  });
}

// test
console.log(bouncer([7, "ate", "", false, 9]));