//To handle exceptions in JavaScript it's common to use try-catch structure.
/*
"The try and catch approach is useful mainly for spotting variables that haven't
  been defined or, as in this case, errors that JavaScript interprets
    as variables that haven't been defined."
*/

function greetWorld() {
  try {
    var greeting = 'Hello World';
    console.lo(greeting);
  }
  catch(err) {
    console.log(err);
  }
}
greetWorld();
