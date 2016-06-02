'use strict';

function translatePigLatin(str) {
  var re = /[aeiou]/i;

  if(re.test(str[0])) { // if the first letter is a vowel
    return str += 'way';
  }
  
  var firstVowel = str.search(re); // get the index of the first vowel
  var consonants = str.substr(0, firstVowel); // get consonants
  str = str.substr(firstVowel, str.length); // take out the consonants
  return str + consonants + 'ay';
}

// tests
console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
