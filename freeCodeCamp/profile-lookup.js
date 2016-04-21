'use strict';

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
  for (var i = 0; i < contacts.length; i++) {
    if (firstName === contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      return 'No such property';
    }
  }
  return 'No such contact';
}

// Tests
console.log(lookUpProfile('Kristian', 'lastName')); // Vos
console.log(lookUpProfile('Sherlock', 'likes')); // ["Intriguing Cases", "Violin"]
console.log(lookUpProfile('Harry', 'likes')); // ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile('Bob', 'number')); // No such contact
console.log(lookUpProfile('Akira', 'address')); // No such property

