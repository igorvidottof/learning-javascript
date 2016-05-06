'use strict';

function findLongestWord(str) {
  var longest = '';
  var words = str.split(' ');
  longest = words[0];
  for(var i = 1; i < words.length; i++) {
    if(words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest.length;
}

// test
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
