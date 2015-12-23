/*eslint-disable no-console, no-alert*/

// We can also catch a value back from a function, with the keyword return

function calcTot(merchTot) {
  var orderTot;

  if(merchTot <= 50) {
    orderTot = merchTot * 1.15;
  }
  else if(merchTot <= 100) {
    orderTot = merchTot * 1.05;
  }
  else {
    orderTot = merchTot;
  }

  return orderTot;
}

var merchPrice = prompt('Enter the price of the merchandise');
var totalToCharge = calcTot(merchPrice);
alert('The total of your bill is $' + totalToCharge);

