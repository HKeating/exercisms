var Isogram = function(input) {
  this.word = input;
};

Isogram.prototype.isIsogram = function() {
  var word = this.word.toLowerCase().replace(/[-'`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/\s]/gi, '');
  console.log('WORD: ', word);
  var letters = [];
  for (var i = 0; i < word.length; i ++) {
    if (!letters.includes(word[i])) {
      letters.push(word[i]);
    } else {
      return false;
    }
  }
  return true;
};

module.exports = Isogram;
