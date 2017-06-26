var PerfectNumbers = function() {
  this.classify = function(num) {
    if (num < 1) {
      return 'Classification is only possible for natural numbers.';
    }
    const isEven = num % 2 === 0;
    const inc = isEven ? 1 : 2;
    const factors = [1, num];
    let total = 1;

    for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
      if (num % curFactor !== 0) continue;
      factors.push(curFactor);
      total += curFactor;
      const compliment = num / curFactor;
      if (compliment !== curFactor) {
        factors.push(compliment);
        total += compliment;
      }
    }

    return total === num && factors.length > 2 ? 'perfect' : total > num ? 'abundant' : 'deficient';
  };
};


module.exports = PerfectNumbers;
