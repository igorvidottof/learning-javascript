//constructor function for producing objects
function HostingPlan(name, price, space, tranfer, pages, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transfer = tranfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
}

/*Instead of including the methods within the constructor we can modify its prototype.
  That causes all the objects to share the same method, rather than creating a copy
  for each object.
*/

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

//We could even add more properties, which have the same value for all objects
HostingPlan.prototype.active = true;

//making the objects
var plan1 = new HostingPlan('Basic', 3.99, 100, 1000, 10, [6, 7]);
var plan2 = new HostingPlan('Premium', 5.99, 500, 5000, 50, [6, 7, 8]);
var plan3 = new HostingPlan('Ultimate', 9.99, 2000, 20000, 500, [10, 11, 12]);
console.log(plan1);
console.log(plan2);
console.log(plan3);

//calling the methods
console.log(plan1.calcAnnual(20));
console.log(plan2.calcAnnual(25));
console.log(plan3.calcAnnual(30));