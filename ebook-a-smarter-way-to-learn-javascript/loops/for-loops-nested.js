/*eslint-disable no-console, no-alert*/

//for-loops nested
// Criando nomes de rapers

var firstNames = ['Blueray', 'Upchuck', 'Lojack', 'Gizmo', 'Do-rag'];
var lastNames = ['Zzz', 'Burp', 'Dogbone', 'Droop'];
var fullNames = [];

for(var i=0; i<firstNames.length; i++) {
  for(var j=0; j<lastNames.length; j++) {
    fullNames.push(firstNames[i] + ' ' + lastNames[j]);
  }
}

fullNames.forEach(function(element){
  console.log(element);
});