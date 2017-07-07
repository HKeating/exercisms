var scrabble = function(str) {
  let score = 0;
  if (!str) {
    return score;
  } else {
    const letters = str.toUpperCase().split('');
    letters.map(letter => {
      score += getScore(scores, letter);
    });
    return score;
  }
};

function getScore(scores, letter) {
  return parseInt(Object.keys(scores).find(score => scores[score].includes(letter)));
}

const scores = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

module.exports = scrabble;
