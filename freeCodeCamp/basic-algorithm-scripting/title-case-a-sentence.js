'use strict';

// First Solution
function titleCase(str) {
  var newStr = '';
  str = str.split(' '); // turn the string into an array
  for(var i = 0; i < str.length; i++) { // loop through the items
    for(var j = 0; j < str[i].length; j++) { // loop through the letters
      if(j === 0) { // if it's the first letter
        newStr += str[i][j].toUpperCase();
      }
      else { // any other
        newStr += str[i][j].toLowerCase();
      }
    }
    if(i < (str.length - 1)) { // if it's not the last word, add a space
      newStr += ' ';
    }
  }
  return newStr;
}

// Second Solution
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(val) { // loop through the array
    var firstLetter = val.substr(0, 1); 
    return val.replace(firstLetter, firstLetter.toUpperCase()); // return an array
  }).join(' '); // join the array returned by the map function
}

// test
console.log(titleCase('I\'m a little tea pot'));