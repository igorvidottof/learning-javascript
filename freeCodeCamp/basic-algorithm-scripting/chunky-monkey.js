function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for(var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, size + i));
  }
  return newArr;
}


// tests
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));