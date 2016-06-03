// First solution
function whereAreYou(collection, source) {
  var arr = [];
  
  var sourceKeys = Object.keys(source);
  var cont = 0;

  arr = collection.filter(function(obj) {
    cont = 0;
    for(var i = 0; i < sourceKeys.length; i++) {
      if(obj.hasOwnProperty(sourceKeys[i])) { 
        if(obj[sourceKeys[i]] === source[sourceKeys[i]]) { 
          cont++;
        }
        if(cont === sourceKeys.length) {
          return obj;
        }
      }
    }
  });  
  
  return arr;
}

// Second solution
function whereAreYou(collection, source) {
  var sourceKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return sourceKeys.every(function(key) { 
      return obj[key] === source[key];
    });
  });
}


// tests
console.log(whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
console.log(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
console.log(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));