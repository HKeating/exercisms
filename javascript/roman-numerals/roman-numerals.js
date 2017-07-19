var toRoman = function(num) {
  let workingNum = num;
  let result = '';
  for (var i = 0; i < numerals.length; i++) {
    const numeralVal = Math.floor(workingNum/numerals[i]['number']);
    workingNum -= numeralVal * numerals[i]['number'];
    for (var j = 0; j < numeralVal; j++) {
      result += numerals[i]['letter'];
    }
    const modifiedIndex = i%2 === 0 && numerals[i+2] ? i+2:i+1;
    if (numerals[i+1] && workingNum && (Math.floor(workingNum/numerals[modifiedIndex]['number']) * numerals[modifiedIndex]['number'] === numerals[i]['number'] - numerals[modifiedIndex]['number'])) {
      result += (numerals[modifiedIndex]['letter'] + numerals[i]['letter']);
      workingNum -= numerals[i]['number'] - numerals[modifiedIndex]['number'];
    }
  }
  return result;
};


const numerals = [
  {
    'letter': 'M',
    'number': 1000
  },
  {
    'letter': 'D',
    'number': 500
  },
  {
    'letter': 'C',
    'number': 100
  },
  {
    'letter': 'L',
    'number': 50
  },
  {
    'letter': 'X',
    'number': 10
  },
  {
    'letter': 'V',
    'number': 5
  },
  {
    'letter': 'I',
    'number': 1
  }
];

module.exports = toRoman;
