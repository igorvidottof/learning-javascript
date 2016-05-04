// Finding a pattern within a string
var str = 'Ana come banana';
var expression = /ana/gi; // /pattern/global ignorecase
var matches = str.match(expression); // returns an array
console.log(matches);
console.log(matches.length);

// Finding numbers within a string - \d
str = 'There are 3 cats but 4 dogs';
expression = /\d+/g; // + allows the regex to match one or more digits (ex: 32)
matches = str.match(expression);
console.log(matches);
console.log(matches.length);

// Finding whitespace characters within a string - \s
str = 'How many spaces are there in this sentence?\n';
expression = /\s+/g;
matches = str.match(expression);
console.log(matches);
console.log(matches.length);

// Inverting regular expression matches with capital selectors
expression = /\S/g;
matches = str.match(expression);
console.log(matches);
console.log(matches.length);