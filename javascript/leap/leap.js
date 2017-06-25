//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.yearBy400 = input%400;
  this.yearBy100 = input%100;
  this.yearBy4 = input%4;
};

Year.prototype.isLeap = function() {
  if (!this.yearBy400 || (this.yearBy100 && !this.yearBy4)) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
