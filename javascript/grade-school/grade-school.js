var School = function() {

  this.roster = function() {
    return this.students;
  };

  this.grade = function(grade) {
    return this.students[grade] ? this.students[grade] : [];
  };

  this.students = {};
};

School.prototype.add = function(name, grade) {
  if (!this.students[grade]) {
    this.students[grade] = [name];
  } else {
    this.students[grade].push(name);
    this.students[grade].sort();
  }
};

module.exports = School;
