var toRoman = function(num) {
  let workingNum = num;
  let result = '';
  const M = Math.floor(num/1000);
  workingNum -= M*1000;

  console.log('M', Math.floor(num/1000));
  console.log('D', Math.floor(num/500));
  console.log('C', Math.floor(num/100));
  console.log('L', Math.floor(num/50));
  console.log('X', Math.floor(num/10));
  console.log('V', Math.floor(num/5));
  console.log('I', Math.floor(num/1));

};

function numeralise(num, numeralValue) {
  const letter = Objects.keys(numerals).find(numeralValue);
  
};

const numerals = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
};

module.exports = toRoman;
