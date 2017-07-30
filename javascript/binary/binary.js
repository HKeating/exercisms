var Binary = function(str) {
  this.binary = str;
};

Binary.prototype.toDecimal = function() {
  let decimal = 0;
  if (this.binary.match('^[0-1]+$')) {
    for (var i = this.binary.length; i > 0; i--) {
      decimal += (parseInt(this.binary[this.binary.length - i]) * Math.pow(2, i-1));
    }
  }
  return decimal;
};

module.exports = Binary;
