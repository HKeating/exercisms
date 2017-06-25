var bigInt = require('./big-integer');

var Grains = function() {
  this.square = function(num) {
    var total = bigInt(2).pow(num-1);
    return `${total}`;
  };

  this.total = function() {
    var total = bigInt(0);
    for (var i = 0; i < 64; i++) {
      total = bigInt(total).add(this.square(i+1));
    }
    return `${total}`;
  };
};

module.exports = Grains;
