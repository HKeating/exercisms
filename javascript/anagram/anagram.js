var Anagram = function(input) {
  this.word = input;

  this.matches = function() {
    if (arguments[0].constructor !== Array) {
      var testWords = [];
      for (var i = 0; i < arguments.length; i++) {
        testWords.push(arguments[i]);
      }
    } else {
      testWords = arguments[0];
    }
    var letters = this.word.toLowerCase().split('').sort();
    var results = [];
    testWords.map(word => {
      if (word.toLowerCase().split('').sort().join() === letters.join() && word.toLowerCase() !== this.word.toLowerCase()) {
        results.push(word);
      }
    });
    return results;
  };
};

module.exports = Anagram;
