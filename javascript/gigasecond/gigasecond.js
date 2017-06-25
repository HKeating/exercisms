var Gigasecond = function(date) {
  this.start = new Date(date);
  this.date = function() {
    return new Date(this.start.getTime() + Math.pow(10,12));
  };
};

module.exports = Gigasecond;
