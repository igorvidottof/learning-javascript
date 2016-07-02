'use strict';

function uniteUnique(arr) {
  var hiddenArgs = Array.from(arguments);
  hiddenArgs = hiddenArgs.slice(1);

  hiddenArgs = hiddenArgs.reduce(function(prev, curr) {
    return prev.concat(curr);
  });

  hiddenArgs.forEach(function(val) {
    if(arr.indexOf(val) === -1) 
      arr.push(val);
  });
  
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);