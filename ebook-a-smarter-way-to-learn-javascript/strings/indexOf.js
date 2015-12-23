/*eslint-disable no-console, no-alert*/

//The phrase 'World War II' is not allowed, so we need to replace it to the Second World War

var text = 'It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was\
 writing the trilogy, which contains, with the weird applicability available only to poetry and\
 myth, the essential notion that the good gray wizard can understand the evil magi precisely\
 because he is just enough like them to grasp their minds and motives in ways that they cannot\
 grasp his. World War II.';

var tamBanned = 'World War II'.length;

/*
for (var i=0; i<text.length; i++) {
  if (text.slice(i, i+tamBanned) === 'World War II') {
    text = text.slice(0, i) + 'the Second World War' + text.slice(i+tamBanned); //text = texto antes + expressão + texto depois
  }
}

console.log(text);
*/

/* This way to this is very difficulty to understand, 
so JavaScript provides another way to do that, with the method indexOf('string')
*/

/*
var firstChar = text.indexOf('World War II'); // return the first index of the expression, if it exists, otherwise return -1
console.log(firstChar);
if (firstChar !== -1) {
  text = text.slice(0, firstChar) + 'the Second World War' + text.slice(firstChar+tamBanned);
}

console.log(text);
*/

/*
while(text.indexOf('World War II') !== -1) {
  var firstChar = text.indexOf('World War II');
  text = text.slice(0, firstChar) + 'the Second World War' + text.slice(firstChar+tamBanned);
}

console.log(text);
*/

// To find the last segment inside a string we use the function .lastIndexOf(string);
var text2 = 'poouf poouf poouf';
var lastOccurrence = text2.lastIndexOf('poouf'); // return the first index of the last occurrence of 'poouf'
console.log(lastOccurrence); //12

