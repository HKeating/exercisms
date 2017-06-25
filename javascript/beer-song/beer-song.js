var BeerSong = function() {
  this.verse = function(num) {
    var s1 = num === 1 ? '' : 's';
    var s2 = num === 2 ? '' : 's';
    var pronoun = num === 1 ? 'it': 'one';
    var bottles = num === 0 ? 'No more': num;
    var bottles2 = num === 0 ? 'no more': num;
    var bottles3 = num === 1 ? 'no more': num-1;
    var sentence = num === 0 ? 'Go to the store and buy some more, 99' : 'Take ' + pronoun + ' down and pass it around, ' + bottles3;
    return `${bottles} bottle${s1} of beer on the wall, ${bottles2} bottle${s1} of beer.\n${sentence} bottle${s2} of beer on the wall.\n`;
  };
};

BeerSong.prototype.sing = function(a, b) {
  var song = '';
  for (var i = a; i >= (b || 0); i--) {
    song += this.verse(i) + (i === (b || 0) ? '': '\n');
  }
  return song;
};


module.exports = BeerSong;
