/*eslint-disable no-console, no-alert*/

// We use three functions to round numbers in JS, which are: Math.round(<number>), Math.ceil(<number>), Math.floor(<number>)

// The first of them rounds up when the decimal is .5 or higher, otherwise it rounds down

console.log(Math.round(5.5));
console.log(Math.round(20.75));
console.log(Math.round(4.21));

// The second one always rounds up, no matter how small is the number 

console.log(Math.ceil(0.0000001));

// The third one always rounds down, no matter how large is the number 

console.log(Math.floor(0.999999));