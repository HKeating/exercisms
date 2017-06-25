var Hamming = function() {
  this.compute = function(a, b) {
    if (a.length === b.length) {
      a = a.split('');
      b = b.split('');
      var hammingNum = 0;
      for (var i = 0; i < a.length; i ++) {
        if (a[i] !== b[i]) {
          hammingNum++;
        }
      }
      return hammingNum;
    } else {
      throw new Error('DNA strands must be of equal length.');
    }
  };
};

module.exports = Hamming;
