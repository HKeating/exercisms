var primeFactors = function() {};

primeFactors.for = function(n) {
  var factors = [];
  let currentNum = n;
  let currentFactor = 2;
  while (currentNum > 1) {
    if (currentNum%currentFactor === 0) {
      currentNum = currentNum/currentFactor;
      factors.push(currentFactor);
    } else {
      currentFactor++;
    }
  }
  return factors;
};
module.exports = primeFactors;
