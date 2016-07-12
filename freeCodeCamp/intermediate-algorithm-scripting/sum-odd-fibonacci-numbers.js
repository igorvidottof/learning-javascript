function sumFibs(num) {
  var a = 1; 
  var b = 0; 
  var fibo = 1; 
  var sum = 0;

  while(fibo <= num) {
    if(fibo % 2 !== 0) 
      sum += fibo;
    fibo = a + b;
    b = a;
    a = fibo;
  }
  return sum;
}

// test
console.log(sumFibs(4));