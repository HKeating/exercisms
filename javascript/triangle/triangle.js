var Triangle = function(a, b, c) {
  this.sides = [a, b, c];

  this.kind = function() {
    if (this.isValid()) {
      return this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] ? 'equilateral' : this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2] ? 'isosceles': 'scalene';
    } else {
      throw new Error();
    }
  };

  this.isValid = function() {
    return this.sides.every(this.greaterThanZero) && this.isTriangle();
  };

  this.greaterThanZero = function(element) {
    return element > 0;
  };

  this.isTriangle = function() {
    return this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1];
  };

};

module.exports = Triangle;
