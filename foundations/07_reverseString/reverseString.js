const reverseString = function(word) {

  let rev_word = "";
  for(i=1; i<=word.length;i++){
    //console.log(phrase[phrase.length - i]);
    rev_word = rev_word + word[word.length - i];

  }
  return rev_word;

};

// Do not edit below this line
module.exports = reverseString;
