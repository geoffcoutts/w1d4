var words = ["ground", "control", "to", "major", "tom"];




function map(words, fn) {
  var newArray=[];
  words.forEach(function(word) {
    newArray.push(fn(word));
  });
  // for (var i = 0; i < words.length; i++){
  //   // console.log(words[i]);
  //   newArray.push(fn(words[i]));
  // }
  return console.log(newArray);
}




map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



// expected output

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]