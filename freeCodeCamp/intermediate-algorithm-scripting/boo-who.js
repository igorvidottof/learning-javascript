'use strict';

function booWho(bool) {
  if(bool === false || bool === true) {
    return true;
  }
  return false;
}

// test
console.log(booWho(false));
console.log(booWho(NaN));