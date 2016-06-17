function repeat(operation, num) {
  for(var i = 1; i <= num; i++) {
    operation();
  }
}

module.exports = repeat;