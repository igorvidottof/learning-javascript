function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if(number % start++ < 1) return false;
  }
  return true;
}

function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

// test
sumPrimes(10);
