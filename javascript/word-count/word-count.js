var Words = function() {
  this.count = function(str) {
    var wordsArray = str.toLowerCase().replace(/[-`~¡!@#$%^&*()_|+=¿?;:",.<>\{\}\[\]\\\/\s]/gi, ' ').split(' ');
    var wordsObj = Object.create(null);
    wordsArray.forEach(word => {
      word = word.replace(/^\'|\'$/g, '');

      word === '' ? null : !wordsObj[word] ? wordsObj[word] = 1 : wordsObj[word] ++;
    });
    return wordsObj;
  };
};

module.exports = Words;
