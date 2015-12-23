/*eslint-disable no-console, no-alert*/

// We can change specific parts of date objects

var currDate = new Date();
console.log(currDate);

currDate.setFullYear(2000);
console.log(currDate);

currDate.setMonth(0);
console.log(currDate);

currDate.setDate(1);
console.log(currDate);

currDate.setHours(0);
console.log(currDate);

currDate.setMinutes(0);
console.log(currDate);

currDate.setSeconds(0);
console.log(currDate);

currDate.setMilliseconds(999);
console.log(currDate);