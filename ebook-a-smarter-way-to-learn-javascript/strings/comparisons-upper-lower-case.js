/*eslint-disable no-console, no-alert*/

var pets = ['dog', 'cat', 'frog'];
var myPet = 'Dog';
myPet = myPet.toLowerCase();
var flag = false;

for(var i=0; i<pets.length; i++) {
  if(pets[i] === myPet) {
    flag = true;
    console.log('Your pet have been found on index ' + i);
    break;
  }
}
if(flag === false) {
  console.log('Your pet haven\'t been found on this array');
}