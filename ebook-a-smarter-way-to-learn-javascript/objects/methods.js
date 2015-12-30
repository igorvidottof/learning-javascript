var hostingPlan = {
  name: 'Basic',
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [6,7],
  //method for calculating the discount, generating a annual price
  calcAnnual: function(percentage) {
    var bestPrice = this.price;
    var currMonth = new Date().getMonth()+1;
    for(var i=0; i<this.discountMonths.length; i++) {
      if(this.discountMonths[i] === currMonth) {
        bestPrice -= (bestPrice*(percentage/100));
        break;
      }
    }
    return (bestPrice*12).toFixed(2);
  }
};

var annualPrice = hostingPlan.calcAnnual(20);
console.log(annualPrice.toFixed(2));