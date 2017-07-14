var toRoman = function(num) {
  let workingNum = num;
  let result = '';
  for (var i = 0; i < numerals.length; i++) {
    if (workingNum === numerals[i]['number'] -1 && workingNum) {
      return result += (numerals[i+1]['letter'] + numerals[i]['letter']);
      // numerals at position 2, 4 and 6 (100, 10, 1) are the ones with abnormal behaviour at 4/9 values.
      // Problem: try to resolve here and return or just adjust and ensure rest of process resolves rest of number?
    }
    const numeralVal = Math.floor(workingNum/numerals[i]['number']);
    workingNum -= numeralVal * numerals[i]['number'];
    for (var j = 0; j < numeralVal; j++) {
      result += numerals[i]['letter'];
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
