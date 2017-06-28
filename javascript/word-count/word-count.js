var Words = function() {
  this.count = function(str) {
    var wordsArray = str.toLowerCase().replace(/[-`~¡!@#$%^&*()_|+=¿?;:",.<>\{\}\[\]\\\/\s]/gi, ' ').split(' ');
    var wordsObj = {};
    wordsArray.forEach(word => {
      word = word.replace(/^\'|\'$/g, '');

      word === '' ? null : !wordsObj[word] ? wordsObj[word] = 1 : wordsObj[word] ++;
    });
    // console.log('Prototype stuff: ', Object.keys(wordsObj));
    // console.log(str, ' : ', wordsObj);
    // wordsObj[constructor] ? wordsObj[constructor] = 1 : null;
    return wordsObj;
  };
};

module.exports = Words;
