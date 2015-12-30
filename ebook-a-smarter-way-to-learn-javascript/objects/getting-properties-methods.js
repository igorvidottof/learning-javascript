function HostingPlan(name, price, space, tranfer, pages, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transfer = tranfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
}

HostingPlan.prototype.calcAnnual = function(percentage) {
  var bestPrice = this.price;
  var currMonth = new Date().getMonth()+1;
  for(var i=0; i<this.discountMonths.length; i++) {
    if(this.discountMonths[i] === currMonth) {
      bestPrice -= (bestPrice*(percentage/100));
      break;
    }
  }
  return (bestPrice*12).toFixed(2);
};
HostingPlan.prototype.active = true;

var plan = new HostingPlan('Basic', 3.99, 100, 1000, 10, [6, 7]);

//getting all properties and methods of an object, even those inherited from the prototype
var allProperties = [];
for(var key in plan) {
  allProperties.push(key);
}
console.log(allProperties);

//getting only the own properties of the object
var ownProperties = [];
for(var key in plan) {
  if(plan.hasOwnProperty(key)) {
    ownProperties.push(key);
  }
}
console.log(ownProperties);