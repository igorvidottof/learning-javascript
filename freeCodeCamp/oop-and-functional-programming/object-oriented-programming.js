'use strict';

// Constructor function
var Person = function(newName, newAge, newWeight) {
  this.name = newName;
  this.age = newAge;
  var weight = newWeight;
  this.getWeight = function() {
    return weight;
  };
  this.setWeight = function(newWeight) {
    weight = newWeight;
  };
};

var p = new Person('Lucy', 19, 200);
console.log(p.name); // Lucy
console.log(p.age); // 19
console.log(p.weight); // undefined (private)

console.log(p.getWeight()); // 200
p.setWeight(250); 
console.log(p.getWeight()); // 250
