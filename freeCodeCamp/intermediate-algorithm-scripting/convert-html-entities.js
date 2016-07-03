function convertHTML(str) {
  var charEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  var re = /[&<>"']/g;
  var matches = str.match(re);

  if(matches) {
    for(var key in charEntities) {
      if(matches.indexOf(key) !== -1) {
        var keyRe = new RegExp(key, 'g');
        str = str.replace(keyRe, charEntities[key]);
      }
    }
  }

  return str;
}

// tests
console.log(convertHTML("Dolce & < < ' Gabbana"));
console.log(convertHTML("abc"));
