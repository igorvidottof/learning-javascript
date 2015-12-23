/*eslint-disable no-console, no-alert*/

//Here it is! A smarter way to replace a segment within a string without using for-loops or any algorithms

var text = 'It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was\
 writing the trilogy, which contains, with the weird applicability available only to poetry and\
 myth, the essential notion that the good gray wizard can understand the evil magi precisely\
 because he is just enough like them to grasp their minds and motives in ways that they cannot\
 grasp his. World War II.';

// to do that, JS provides a method, which in union with a regular expression does all the work for us

// Replacing a single segment in a string

text = text.replace('World War II', 'the Second World War');
console.log(text);

// What if we want to change all the occurrences? We use regExp!

text = text.replace(/World War II/g, 'the Second World War'); // the //g statement means "global"
console.log(text);