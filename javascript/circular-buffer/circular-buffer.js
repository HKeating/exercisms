var circularBuffer = function(a) {
  return new Buffer(a);
};

var Buffer = function(b) {
  this.length = b;
  this.values = [];

  this.read = function() {
    if (this.values) {
      const readValue = this.values[0];
      this.values.shift();
      return readValue;
    } else {
      throw bufferEmptyException();
    }
  };

  this.write = (x) => {
    if (this.length === this.values.length) {
      throw bufferFullException();
    } else {
      if(x) {
        this.values.push(x);
      }
    }
  };

  this.forceWrite = (x) => {
    if(x) {
      if (this.length === this.values.length) {
        this.values.shift();
      }
      this.values.push(x);
    }
  };

  this.clear = () => {
    this.values = [];
    this.currentPos = 0;
  };
};

const bufferEmptyException = () => {
  return new Error();
};
const bufferFullException = () => {
  return new Error();
};

module.exports = {
  circularBuffer,
  bufferEmptyException,
  bufferFullException
};
