var FoodChain = function() {
  this.lines = [
    {
      animal: 'fly',
      line: '\nI don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n'
    },
    {
      animal: 'spider',
      line: '\nIt wriggled and jiggled and tickled inside her.\n'
    },
    {
      animal: 'bird',
      line: '\nHow absurd to swallow a bird!\n'
    },
    {
      animal: 'cat',
      line: '\nImagine that, to swallow a cat!\n'
    },
    {
      animal: 'dog',
      line: '\nWhat a hog, to swallow a dog!\n'
    },
    {
      animal: 'goat',
      line: '\nJust opened her throat and swallowed a goat!\n'
    },
    {
      animal: 'cow',
      line: '\nI don\'t know how she swallowed a cow!\n'
    },
    {
      animal: 'horse',
      line: '\nShe\'s dead, of course!\n'
    }
  ];

  this.verse = function(num) {
    var response = `I know an old lady who swallowed a ${this.lines[num-1].animal}.` + this.lines[num-1].line;
    if (num < 8) {
      for (var i = num-1; i > 0; i--) {
        response += `She swallowed the ${this.lines[i].animal} to catch the ${this.lines[i-1].animal}` + ((i === 2 && num !== 2) ? ' that wriggled and jiggled and tickled inside her.\n' : (i > 2 ? '.\n' : '.'));
      }
    }

    return response + ((num > 1 && num < 8) ? this.lines[0].line : '');
  };

  this.verses = function(a, b) {
    var response = '';
    for (var i = a; i <= b; i++) {
      response += (this.verse(i) + '\n');
    }
    return response;
  };
};


module.exports = FoodChain;
