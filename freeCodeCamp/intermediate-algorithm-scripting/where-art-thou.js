
function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);

  arr = collection.filter(function(obj) {
    for(var i = 0; i < sourceKeys.length; i++) {
      if(obj.hasOwnProperty(sourceKeys[i])) {
        for(var key in obj) {
          if(obj[key] === source[key]) { 
            return obj;
          }
        }
      }
    }
  });  

  
  // Only change code above this line
  return arr;
}

// console.log(whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
console.log(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
console.log(whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));