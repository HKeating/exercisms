var Robot = function() {
  this.name = this.generatedName || this.generateName();
};

Robot.prototype.usedNames = [];

Robot.prototype.randChar = function(str) {
  var randNum = Math.floor(Math.random() * str.length);
  return str.charAt(randNum);
};

Robot.prototype.checkName = function checkName(name) {
  return !this.usedNames.includes(name);
};

Robot.prototype.reset = function() {
  return this.name = this.generateName();
};

Robot.prototype.generateName = function generateName() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  this.generatedName = this.randChar(letters) + this.randChar(letters) + this.randChar(numbers) + this.randChar(numbers) + this.randChar(numbers);
  return this.checkName(this.generatedName) ? this.usedNames.push(this.generatedName) && this.generatedName : this.generateName();
};

module.exports = Robot;
