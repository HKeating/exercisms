var toRoman = function(num) {
  let result = '';
  console.log('M', Math.floor(num/1000));
  console.log('D', Math.floor(num/500));
  console.log('C', Math.floor(num/100));
  console.log('L', Math.floor(num/50));
  console.log('X', Math.floor(num/10));
  console.log('V', Math.floor(num/5));
  console.log('I', Math.floor(num/1));

};

module.exports = toRoman;
