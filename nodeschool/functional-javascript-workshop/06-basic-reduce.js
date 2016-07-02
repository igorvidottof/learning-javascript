function countWords(inputWords) {
  return inputWords.reduce(function(timesRepeated, word) {
    if(!timesRepeated[word]) 
      timesRepeated[word] = 1;
    else 
      timesRepeated[word]++;
    
    return timesRepeated;
  }, {});
}
module.exports = countWords;