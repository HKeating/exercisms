var Words = function() {
  this.count = function(str) {
    return str.split(' ').length;
  };
};

module.exports = Words;
