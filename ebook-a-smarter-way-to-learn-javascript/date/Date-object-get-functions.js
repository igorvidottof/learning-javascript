/*eslint-disable no-console, no-alert*/

var dateObj = new Date();
console.log(dateObj);

// Extracting the day of the week
var theDay = dateObj.getDay(); //this function will return a number that represents the day of the week, starting from 0 - Sunday, and so on.
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log('Today is ' + daysOfWeek[theDay]);

// Other extraction methods for the Date object
var currentMonth = dateObj.getMonth(); // 0-11 (Jan-Dec)
console.log(currentMonth); 

var dayOfMonth = dateObj.getDate();
console.log(dayOfMonth);

var currentYear = dateObj.getFullYear();
console.log(currentYear);

var currentHour = dateObj.getHours(); // 0-23
console.log(currentHour);

var currentMins = dateObj.getMinutes(); // 0-59
console.log(currentMins);

var currentSecs = dateObj.getSeconds(); // 0-59
console.log(currentSecs);

var currentMillis = dateObj.getMilliseconds(); // 0-999
console.log(currentMillis);

var millisSince1970 = dateObj.getTime();
console.log(millisSince1970);