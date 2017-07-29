var circularBuffer = function(a) {
  this.length = a;
  this.values = [];
  return a;
};

circularBuffer.prototype.write = function(x) {
  this.values.push(x);
  return x;
};

circularBuffer.prototype.read = function() {
  return this.values || bufferEmptyException;
};

var bufferEmptyException = new Error();
var bufferFullException = new Error();


module.exports = {
  circularBuffer,
  bufferEmptyException,
  bufferFullException
};


var buffer = circularBuffer(2);

console.log('BUFFER: ', buffer);
