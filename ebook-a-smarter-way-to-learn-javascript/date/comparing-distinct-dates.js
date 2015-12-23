/*eslint-disable no-console, no-alert*/


// Choose two distinct dates
var currentDay = new Date();
var futureDay = new Date('January 01, 2016'); //we can also specify the hours, following the syntax ('Month' date, year XX:XX:XX)
console.log(futureDay);

// Convert both of them to ms and compare the difference 
var msCurrentDay = currentDay.getTime();
var msFutureDay = futureDay.getTime();
var msDifference = msFutureDay - msCurrentDay;

// Convert the ms difference to days
var daysDifference = msDifference / (1000 * 60 * 60 * 24); // converting to secs, minutes, hours, days

// round down the result 
var finalDaysDifference = Math.floor(daysDifference);
console.log(finalDaysDifference);

// Direct way to do that
var millisToNewYear = new Date('January 01, 2016').getTime() - new Date().getTime();
console.log(millisToNewYear);

var daysToNewYear = Math.floor(millisToNewYear / (1000*60*60*24));
console.log(daysToNewYear);