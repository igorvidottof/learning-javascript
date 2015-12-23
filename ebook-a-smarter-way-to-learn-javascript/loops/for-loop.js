/*eslint-disable no-console, no-alert*/

// Verificando se o nome está na lista
var names = ['Maria', 'José', 'Pedro', 'Ana', 'Paulo'];
var myName = 'Igor';
var matchFound = false;

for(var i=0; i<names.length; i++) {
  if(names[i] === myName) {
    matchFound = true;
    console.log('Your name have been found on index ' + i);
    break;
  }
}
if(matchFound === false) {
  console.log('Your name haven\'t been found on this array names :/');
}