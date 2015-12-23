/*eslint-disable no-console, no-alert*/

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var currDay = new Date().getDay();

switch(days[currDay]) {
  case 'Sun' :
    alert('yay o/');
    break;
  case 'Sat' :
    alert('yay o/');
    break;
  case 'Fri' :
    alert('Almost there :P');
    break;
  default :
    alert('Wake me UP!');
}

