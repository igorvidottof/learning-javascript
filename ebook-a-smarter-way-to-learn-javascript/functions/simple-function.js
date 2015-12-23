/*eslint-disable no-console, no-alert*/

// Showing the time to the user simply calling a function every time we want

function tellTime() {
  var completeDate = new Date();
  var currHour = completeDate.getHours();
  var currMins = completeDate.getMinutes();
  alert('Now it\'s ' + currHour + ':' + currMins);
}

tellTime();

