'use strict';

var person = {
  name: 'Igor'
};

// Adding properties
person.age = 19; // or person['age'] = 19;
console.log(person);

// Updating properties 
person.name = 'Igor Vidotto'; // or person['name'] = 'Igor Vidotto';
console.log(person);

// deleting properties 
delete person.age; // or delete person['age'];
console.log(person);

// verifying whether an object has a particular property
function checkObj(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return 'Property found: ' + 'name = ' + obj[prop];
  } 
  return 'Property not found :/';
}

console.log(checkObj(person, 'name'));

