var DnaTranscriber = function() {
  this.pairs = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  this.toRna = function(dna) {
    return dna.split('').map(letter => {
      if (letter.match(/G|C|T|A/)) {
        return this.pairs[letter];
      } else {
        throw new Error('Invalid input');
      }
    }).join('');
  };
};

module.exports = DnaTranscriber;
