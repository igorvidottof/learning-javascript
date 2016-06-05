'use strict';

var pairs = {
  T: 'A',
  A: 'T',
  G: 'C',
  C: 'G'
};

function pairElement(str) {
  var chars = str.split('');
  var pair = [];
  return chars.map(function(char) {
    pair = [];
    pair.push(char);
    pair.push(pairs[char]);
    return pair;
  });
}

// test
console.log(pairElement("GCG"));